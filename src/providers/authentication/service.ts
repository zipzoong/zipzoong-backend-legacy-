import { Check } from "./check";
import { pipe } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import { getISOString, isNull } from "@UTIL";
import { randomUUID } from "crypto";
import { Crypto } from "./crypto";
import { Oauth } from "./oauth";
import { Customer } from "@PROVIDER/user/customer";
import { HSProvider } from "@PROVIDER/user/hs_provider";
import { REAgent } from "@PROVIDER/user/re_agent";
import { IAuthentication, ITokens } from "@DTO/auth";
import BusinessUser from "@PROVIDER/user/business_user";
import { Exception } from "./exception";

export namespace Service {
  export const signIn = ({
    user_type,
    code,
    oauth_type
  }: IAuthentication.ISignIn): Promise<ITokens> =>
    pipe(
      code,

      (_code) => Oauth[oauth_type](_code),

      async ({ oauth_sub }) =>
        prisma.oauthAccessorModel.findFirst({
          where: { oauth_sub, oauth_type }
        }),

      Check.existAccessor,

      Check.activeAccessor,

      Check.existUserId(user_type),

      (user_id) => Crypto.getUserToken({ type: "user", user_id, user_type }),

      (access_token) => ({ access_token })
    );

  export const signUp = ({
    code,
    oauth_type
  }: IAuthentication.ISignUp): Promise<ITokens> =>
    pipe(
      code,

      (_code) => Oauth[oauth_type](_code),

      async ({ oauth_sub, profile }) =>
        (await prisma.oauthAccessorModel.findFirst({
          where: { oauth_sub, oauth_type }
        })) ??
        prisma.oauthAccessorModel.create({
          data: {
            id: randomUUID(),
            oauth_sub,
            oauth_type,
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
            profile_image_url: profile.profile_image_url,
            birth: profile.birth,
            gender: profile.gender,
            address_first: profile.address?.first,
            address_second: profile.address?.second,
            created_at: getISOString(),
            updated_at: getISOString(),
            is_deleted: false,
            deleted_at: null
          }
        }),

      Check.activeAccessor,

      (model) =>
        Crypto.getAccessorToken({ type: "accessor", accessor_id: model.id }),

      (access_token) => ({ access_token })
    );

  export const getProfile = (
    accessor_id: string
  ): Promise<IAuthentication.IProfile> =>
    pipe(
      accessor_id,

      async (id) => prisma.oauthAccessorModel.findFirst({ where: { id } }),

      Check.existAccessor,
      Check.activeAccessor,

      ({
        name,
        email,
        phone,
        profile_image_url,
        birth,
        gender,
        address_first,
        address_second
      }) => ({
        name,
        email,
        phone,
        profile_image_url,
        birth,
        gender,
        address: address_first
          ? {
              first: address_first,
              second: address_second
            }
          : null
      })
    );

  const getEmail = async (code: string): Promise<string> => {
    return `${code}@test.com`;
  };

  const getPhone = async (code: string): Promise<string> => {
    return code;
  };

  export const createUser = async (
    accessor_id: string,
    input: IAuthentication.ICreateRequest
  ): Promise<void> => {
    const accessor = await Check.canCreateUser(input.type)(accessor_id);

    const email = input.email_access_code
      ? await getEmail(input.email_access_code)
      : accessor.email ?? null;

    const phone = input.phone_access_code
      ? await getPhone(input.phone_access_code)
      : accessor.phone ?? null;

    const queries: Prisma.PrismaPromise<unknown>[] = [];
    let user_id: string;

    switch (input.type) {
      case "customer":
        {
          await Check.acceptanceValid(input);
          const data = Customer.Json.createData({ ...input, email, phone });
          user_id = data.base.create.id;
          queries.push(prisma.customerModel.create({ data }));
        }
        break;
      case "real estate agent":
        if (isNull(phone)) throw Exception.PhoneRequired;
        {
          await Check.acceptanceValid(input);
          await BusinessUser.Check.subExpertCategoriesValid(input);
          const data = REAgent.Json.createData({ ...input, email, phone });
          user_id = data.base.create.base.create.id;
          queries.push(prisma.rEAgentModel.create({ data }));
        }
        break;
      case "home service provider":
        if (isNull(phone)) throw Exception.PhoneRequired;
        {
          await Check.acceptanceValid(input);
          await BusinessUser.Check.subExpertCategoriesValid(input);
          const data = HSProvider.Json.createData({ ...input, email, phone });
          user_id = data.base.create.base.create.id;
          queries.push(prisma.hSProviderModel.create({ data }));
        }
        break;
      default:
        throw Error("unreachable case");
    }

    queries.push(
      prisma.oauthAccessorModel.update({
        where: { id: accessor_id },
        data: {
          ...(input.type === "customer" ? { customer_id: user_id } : {}),
          ...(input.type === "home service provider" ||
          input.type === "real estate agent"
            ? { business_user_id: user_id }
            : {}),
          updated_at: getISOString()
        }
      })
    );

    await prisma.$transaction(queries);
    return;
  };
}
