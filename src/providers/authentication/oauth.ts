import { Kakao, isError } from "@devts/authjs";
import { IAuthentication } from "@DTO/authentication";
import { Configuration } from "@INFRA/config";
import typia from "typia";
import { Exception } from "./exception";

const kakao_options: Kakao.IOauth2Options = {
  client_id: Configuration.KAKAO_CLIENT_ID,
  client_secret: Configuration.KAKAO_CLIENT_SECRET,
  redirect_uri: Configuration.KAKAO_REDIRECT_URI,
  service_terms: [],
  prompt: "login"
};
const kakao_get_tokens = Kakao.getTokens(kakao_options);

export const Oauth: Record<
  IAuthentication.OauthType,
  (code: string) => Promise<{
    oauth_sub: string;
    profile: IAuthentication.IProfile;
  }>
> = {
  async kakao(code) {
    const response = await kakao_get_tokens(code);

    if (isError(response)) throw Exception.AuthenticationFail;

    const me_response = await Kakao.getMe({
      secure_resource: true,
      property_keys: [
        "kakao_account.birthday",
        "kakao_account.email",
        "kakao_account.gender",
        "kakao_account.name",
        "kakao_account.profile"
      ]
    })(response.result.access_token);

    if (isError(me_response)) throw Exception.AuthenticationFail;

    const me = me_response.result;

    const oauth_sub = me.id + "";

    const birthyear = me.kakao_account?.birthyear;
    const birthday = me.kakao_account?.birthday;

    const name = me.kakao_account?.name ?? null;
    const email =
      (me.kakao_account?.is_email_valid &&
        me.kakao_account.is_email_verified &&
        me.kakao_account?.email) ||
      null;
    const phone = me.kakao_account?.phone_number ?? null;
    const birth =
      (birthyear &&
        birthday &&
        `${birthday}-${birthday.slice(0, 2)}-${birthday.slice(2, 4)}`) ??
      null;
    const gender = me.kakao_account?.gender ?? null;
    const profile_image_url =
      me.kakao_account?.profile?.profile_image_url ?? null;

    const profile: IAuthentication.IProfile = {
      name: typia.is<Pick<IAuthentication.IProfile, "name">>({ name })
        ? name
        : null,
      email: typia.is<Pick<IAuthentication.IProfile, "email">>({ email })
        ? email
        : null,
      phone: typia.is<Pick<IAuthentication.IProfile, "phone">>({ phone })
        ? phone
        : null,
      profile_image_url: typia.is<
        Pick<IAuthentication.IProfile, "profile_image_url">
      >({ profile_image_url })
        ? profile_image_url
        : null,
      birth: typia.is<Pick<IAuthentication.IProfile, "birth">>({ birth })
        ? birth
        : null,
      gender: typia.is<Pick<IAuthentication.IProfile, "gender">>({ gender })
        ? gender
        : null,
      address: null
    };
    return { oauth_sub, profile };
  }
};

export const LoginUrl: Record<IAuthentication.OauthType, string> = {
  kakao: Kakao.getLoginUri(kakao_options)
};
