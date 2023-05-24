import { Check } from "./check";
import { pipe } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import { getISOString, isInActive, isNull, Result, toThrow } from "@UTIL";
import { randomUUID } from "crypto";
import { LoginUrl, Oauth } from "./oauth";
import { Customer } from "@PROVIDER/user/customer";
import { HSProvider } from "@PROVIDER/user/hs_provider";
import { REAgent } from "@PROVIDER/user/re_agent";
import BusinessUser from "@PROVIDER/user/business_user";
import { Exception } from "./exception";
import { IAuthentication } from "@DTO/authentication";
import { Token } from "./token";

export namespace Service {
  export const signIn = ({
    user_type,
    code,
    oauth_type
  }: IAuthentication.ISignIn): Promise<IAuthentication.IResponse> =>
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

      (user_id) => ({
        ...Token.Access.generate({ user_id, user_type }),
        ...Token.Refresh.generate({ user_id, user_type })
      })
    );

  export const getUri = (oauth_type: IAuthentication.OauthType): string => {
    return LoginUrl[oauth_type];
  };

  export const signUp = ({
    code,
    oauth_type
  }: IAuthentication.ISignUp): Promise<IAuthentication.IAccountToken> =>
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

      (model) => Token.Account.generate({ account_id: model.id })
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

  const getVerifiedEmail = async ({
    email_authentication_id
  }: {
    email_authentication_id: string | null;
  }): Promise<string | null> => {
    if (isNull(email_authentication_id)) return null;
    return null;
  };

  const getVerifiedPhone = async ({
    phone_authentication_id
  }: {
    phone_authentication_id: string | null;
  }): Promise<string | null> => {
    if (isNull(phone_authentication_id)) return null;
    const auth = await prisma.phoneAuthenticationModel.findFirst({
      where: { id: phone_authentication_id }
    });
    if (isNull(auth)) return null;
    if (isInActive(auth)) return null;
    if (auth.is_verified) return auth.phone;
    return null;
  };

  export const createUser = async ({
    input,
    account_id
  }: {
    input: IAuthentication.ICreateRequest;
    account_id: string;
  }): Promise<IAuthentication.IResponse> => {
    const email = await getVerifiedEmail(input);
    const phone = await getVerifiedPhone(input);

    const user_id = await prisma.$transaction(async (tx) => {
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
        case "customer": {
          await Check.acceptanceValid({
            type: input.type,
            acceptant_agreement_ids: input.acceptant_agreement_ids,
            tx
          });
          const data = Customer.Json.createData({ ...input, email, phone });
          await tx.customerModel.create({ data });
          await connect({ customer_id: data.base.create.id });
          return data.base.create.id;
        }
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
            return data.base.create.base.create.id;
          }
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
            return data.base.create.base.create.id;
          }
        default:
          throw Error("unreachable case");
      }
    });

    return {
      ...Token.Access.generate({ user_id, user_type: input.type }),
      ...Token.Refresh.generate({ user_id, user_type: input.type })
    };
  };

  export const refresh = async (
    refresh_token: string
  ): Promise<IAuthentication.IAccessToken> =>
    pipe(
      refresh_token,

      Token.Refresh.refresh,

      (input) =>
        Result.Ok.is(input)
          ? Result.Ok.flatten(input)
          : toThrow(
              Result.Error.flatten(input) === "Token Expired"
                ? Exception.TokenExpired
                : Exception.TokenInvalid
            )
    );
}
