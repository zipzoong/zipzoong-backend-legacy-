import { Authentication, ITokens } from "@DTO/auth";
import { pipe } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { ForbiddenException } from "@nestjs/common";
import { getISOString, throwIfNull } from "@UTIL";
import { randomUUID } from "crypto";
import { Crypto } from "./crypto";
import { Oauth } from "./oauth";

export namespace AuthenticationService {
  export const signIn = (input: Authentication.ISignIn): Promise<ITokens> => {
    throw Error();
  };

  export const signUp = (input: Authentication.ISignUp): Promise<ITokens> =>
    pipe(
      input,

      ({ code, oauth_type }) => Oauth[oauth_type](code),

      async ({ oauth_sub, oauth_type, profile }) =>
        (await prisma.oauthAccessorModel.findFirst({
          where: { oauth_sub, oauth_type }
        })) ??
        (await prisma.oauthAccessorModel.create({
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
        })),

      (model) =>
        Crypto.getAccessorToken({ type: "accessor", accessor_id: model.id }),

      (access_token) => ({ access_token })
    );

  export const getProfile = async (
    accessor_id: string
  ): Promise<Authentication.IProfile> =>
    pipe(
      accessor_id,
      (id) => prisma.oauthAccessorModel.findFirst({ where: { id } }),

      throwIfNull(new ForbiddenException("Permission denied")),

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
}
