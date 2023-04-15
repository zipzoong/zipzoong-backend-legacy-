import { Kakao, StrategyException } from "@devts/nestjs-auth";
import { OAUTH_PROFILE } from "./oauth.profile.key";
import { IAccessor } from "@DTO/user/accessor";
import { Configuration } from "@INFRA/config";
import { UnauthorizedException } from "@nestjs/common";

export class KakaoStrategy extends Kakao.AbstractStrategy<
  typeof OAUTH_PROFILE,
  IAccessor.IOauthProfile
> {
  constructor() {
    super({
      key: "OAUTH_PROFILE",
      request_profile_options: {
        secure_resource: true,
        property_keys: [
          "kakao_account.gender",
          "kakao_account.email",
          "kakao_account.birthday",
          "kakao_account.profile"
        ]
      },
      client_id: Configuration.KAKAO_CLIENT_ID,
      client_secret: Configuration.KAKAO_CLIENT_SECRET,
      redirect_uri: Configuration.KAKAO_REDIRECT_URI,
      prompt: "login",
      service_terms: []
    });
  }

  protected override throw({
    message = "Fail to authenticate for Kakao"
  }: StrategyException): never {
    throw new UnauthorizedException(message);
  }

  override validate(): boolean {
    throw new Error("Method not implemented.");
  }
  override transform(): IAccessor.IOauthProfile {
    throw new Error("Method not implemented.");
  }
}
