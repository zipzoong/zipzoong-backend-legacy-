import { IAuthentication } from "@DTO/authentication";
import typia from "typia";
import { KakaoStrategy } from "./strategy";

const kakao = new KakaoStrategy();
export const Oauth: Record<
  IAuthentication.OauthType,
  (code: string) => Promise<{
    oauth_sub: string;
    profile: IAuthentication.IProfile;
  }>
> = {
  async kakao(code) {
    const response = await kakao.getIdentity(await kakao.authorize(code));
    if (!typia.is(response)) throw Error();
    const oauth_sub = response.id + "";

    const birthyear = response.kakao_account?.birthyear;
    const birthday = response.kakao_account?.birthday;

    const profile: IAuthentication.IProfile = {
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
    return { oauth_sub, profile };
  }
};
