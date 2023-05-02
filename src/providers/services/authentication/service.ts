import { Check } from "./check";
import { Authentication, ITokens } from "@DTO/auth";
import { pipe } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";
import { Crypto } from "./crypto";
import { Oauth } from "./oauth";
import { createUserQuery } from "./create-user.query";

export namespace AuthenticationService {
  export const signIn = ({
    user_type,
    code,
    oauth_type
  }: Authentication.ISignIn): Promise<ITokens> =>
    pipe(
      code,

      (_code) => Oauth[oauth_type](_code),

      async ({ oauth_sub }) =>
        prisma.oauthAccessorModel.findFirst({
          where: { oauth_sub, oauth_type }
        }),

      Check.ExistAccessor,

      Check.ActiveAccessor,

      Check.ExistUserId(user_type),

      (user_id) => Crypto.getUserToken({ type: "user", user_id, user_type }),

      (access_token) => ({ access_token })
    );

  export const signUp = ({
    code,
    oauth_type
  }: Authentication.ISignUp): Promise<ITokens> =>
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

      Check.ActiveAccessor,

      (model) =>
        Crypto.getAccessorToken({ type: "accessor", accessor_id: model.id }),

      (access_token) => ({ access_token })
    );

  export const getProfile = async (
    accessor_id: string
  ): Promise<Authentication.IProfile> =>
    pipe(
      accessor_id,

      async (id) => prisma.oauthAccessorModel.findFirst({ where: { id } }),

      Check.ExistAccessor,
      Check.ActiveAccessor,

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
    input: Authentication.ICreateRequest
  ): Promise<void> => {
    const accessor = await Check.CanCreateUser(input.type)(accessor_id);

    await Check.Agreement(input);

    if (input.type !== "customer") {
      await Check.SuperExpertise(input);
      await Check.SubExpertises(input);
    }

    const email = input.email_access_code
      ? await getEmail(input.email_access_code)
      : accessor.email ?? undefined;

    const phone = input.phone_access_code
      ? await getPhone(input.phone_access_code)
      : accessor.phone ?? undefined;

    const [user_id, ...queries] = createUserQuery({
      ...input,
      email,
      phone
    });

    await prisma.$transaction<Prisma.PrismaPromise<unknown>[]>([
      ...queries,
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
    ]);
    return;
  };
}
