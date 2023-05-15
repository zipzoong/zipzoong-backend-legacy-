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
        prisma.oauthAccountModel.findFirst({
          where: { oauth_sub, oauth_type }
        }),

      Check.existAccount,

      Check.activeAccount,

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
        (await prisma.oauthAccountModel.findFirst({
          where: { oauth_sub, oauth_type }
        })) ??
        prisma.oauthAccountModel.create({
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

      Check.activeAccount,

      (model) =>
        Crypto.getAccountToken({ type: "account", account_id: model.id }),

      (access_token) => ({ access_token })
    );

  export const getProfile = (
    account_id: string
  ): Promise<IAuthentication.IProfile> =>
    pipe(
      account_id,

      async (id) => prisma.oauthAccountModel.findFirst({ where: { id } }),

      Check.existAccount,
      Check.activeAccount,

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

  export const createUser = async ({
    input,
    account_id
  }: {
    input: IAuthentication.ICreateRequest;
    account_id: string;
  }): Promise<void> => {
    const email = input.email_access_code
      ? await getEmail(input.email_access_code)
      : null;
    const phone = input.phone_access_code
      ? await getPhone(input.phone_access_code)
      : null;

    await prisma.$transaction(async (tx) => {
      const account = await Check.canCreateUser(input.type)({ account_id, tx });

      const connect = (
        input: Partial<
          Pick<
            Prisma.OauthAccountModelUncheckedUpdateInput,
            "business_user_id" | "customer_id"
          >
        >
      ) =>
        tx.oauthAccountModel.update({
          where: { id: account.id },
          data: {
            ...input,
            updated_at: getISOString()
          }
        });

      switch (input.type) {
        case "customer":
          {
            await Check.acceptanceValid({
              type: input.type,
              acceptant_agreement_ids: input.acceptant_agreement_ids,
              tx
            });
            const data = Customer.Json.createData({ ...input, email, phone });
            await tx.customerModel.create({ data });
            await connect({ customer_id: data.base.create.id });
          }
          break;
        case "real estate agent":
          if (isNull(phone)) throw Exception.PhoneRequired;
          {
            await Check.acceptanceValid({
              type: input.type,
              acceptant_agreement_ids: input.acceptant_agreement_ids,
              tx
            });
            await BusinessUser.Check.subExpertCategoriesValid({
              type: input.type,
              sub_expertise_ids: input.sub_expertise_ids,
              tx
            });
            const data = REAgent.Json.createData({ ...input, email, phone });
            await tx.rEAgentModel.create({ data });
            await connect({
              business_user_id: data.base.create.base.create.id
            });
          }
          break;
        case "home service provider":
          if (isNull(phone)) throw Exception.PhoneRequired;
          {
            await Check.acceptanceValid({
              type: input.type,
              acceptant_agreement_ids: input.acceptant_agreement_ids,
              tx
            });
            await BusinessUser.Check.subExpertCategoriesValid({
              type: input.type,
              sub_expertise_ids: input.sub_expertise_ids,
              tx
            });
            const data = HSProvider.Json.createData({ ...input, email, phone });
            await tx.hSProviderModel.create({ data });
            await connect({
              business_user_id: data.base.create.base.create.id
            });
          }
          break;
        default:
          throw Error("unreachable case");
      }
    });

    return;
  };
}
