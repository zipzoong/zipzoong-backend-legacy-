import { Authentication, ITokens } from "@DTO/auth";
import { prisma } from "@INFRA/DB";
import { OauthAccessorModel } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";
import typia from "typia";
import { KakaoStrategy } from "./internal/strategy";

export namespace AuthenticationService {
  const Oauth: Record<
    Authentication.OauthType,
    (
      code: string
    ) => Promise<{ oauth_sub: string; profile: Authentication.IProfile }>
  > = {
    async kakao(code) {
      const kakao = new KakaoStrategy();
      const response = await kakao.getIdentity(await kakao.authorize(code));
      if (!typia.is(response)) throw Error();
      const oauth_sub = response.id + "";
      const profile: Authentication.IProfile = {
        name: null,
        email: null,
        phone: null,
        profile_image_url: null,
        birth: null,
        gender: null,
        address: null
      };
      return { oauth_sub, profile };
    },
    async naver(code) {
      throw new Error("Method not implemented.");
    }
  };

  export const signUp = async ({
    code,
    oauth_type
  }: Authentication.ISignUp): Promise<ITokens> => {
    const { oauth_sub, profile } = await Oauth[oauth_type](code);
    const now = getISOString();
    const accessorModel =
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
          created_at: now,
          updated_at: now,
          is_deleted: false,
          deleted_at: null
        }
      }));
    const payload = { accessor_id: accessorModel.id };
    const access_token = JSON.stringify(payload);
    return { access_token };
  };
}
