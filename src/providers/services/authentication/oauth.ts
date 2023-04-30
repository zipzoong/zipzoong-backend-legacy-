import { Authentication } from "@DTO/auth";
import typia from "typia";
import { KakaoStrategy } from "./strategy";

export const Oauth: Record<
  Authentication.OauthType,
  (code: string) => Promise<{
    oauth_sub: string;
    oauth_type: Authentication.OauthType;
    profile: Authentication.IProfile;
  }>
> = {
  async kakao(code) {
    const kakao = new KakaoStrategy();
    const response = await kakao.getIdentity(await kakao.authorize(code));
    if (!typia.is(response)) throw Error();
    const oauth_sub = response.id + "";

    const birthyear = response.kakao_account?.birthyear;
    const birthday = response.kakao_account?.birthday;

    const profile: Authentication.IProfile = {
      name: response.kakao_account?.name ?? null,
      email:
        (response.kakao_account?.is_email_valid &&
          response.kakao_account.is_email_verified &&
          response.kakao_account?.email) ||
        null,
      phone: response.kakao_account?.phone_number ?? null,
      profile_image_url:
        response.kakao_account?.profile?.profile_image_url ?? null,
      birth:
        (birthyear &&
          birthday &&
          `${birthday}-${birthday.slice(0, 2)}-${birthday.slice(2, 4)}`) ??
        null,
      gender: response.kakao_account?.gender ?? null,
      address: null
    };
    return { oauth_sub, oauth_type: "kakao", profile };
  },
  async naver(code) {
    throw new Error("Method not implemented.");
  }
};
