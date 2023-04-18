import { Configuration } from "@INFRA/config";
import { Kakao, StrategyException } from "@devts/nestjs-auth";
import { UnauthorizedException } from "@nestjs/common";

export class KakaoStrategy extends Kakao.AbstractStrategy<"OauthAccessor"> {
  constructor() {
    super({
      client_id: Configuration.KAKAO_CLIENT_ID,
      client_secret: Configuration.KAKAO_CLIENT_SECRET,
      redirect_uri: Configuration.KAKAO_REDIRECT_URI,
      key: "OauthAccessor",
      prompt: "login",
      service_terms: [],
      request_profile_options: {
        secure_resource: true,
        property_keys: [
          "kakao_account.email",
          "kakao_account.gender",
          "kakao_account.name",
          "kakao_account.birthday"
        ]
      }
    });
  }

  protected override throw({ message }: StrategyException): never {
    throw new UnauthorizedException(message);
  }

  override validate(): boolean {
    return true;
  }

  override transform(identity: Kakao.MeResponse): Kakao.MeResponse {
    return identity;
  }
}
