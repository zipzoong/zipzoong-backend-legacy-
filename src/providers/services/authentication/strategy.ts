import { Kakao } from "@devts/nestjs-auth";
import { Configuration } from "@INFRA/config";

export class KakaoStrategy extends Kakao.AbstractStrategy<"oauth"> {
  constructor() {
    super({
      key: "oauth",
      request_profile_options: {
        secure_resource: true,
        property_keys: [
          "kakao_account.birthday",
          "kakao_account.email",
          "kakao_account.gender",
          "kakao_account.name",
          "kakao_account.profile"
        ]
      },
      client_id: Configuration.KAKAO_CLIENT_ID,
      client_secret: Configuration.KAKAO_CLIENT_SECRET,
      redirect_uri: Configuration.KAKAO_REDIRECT_URI,
      service_terms: [],
      prompt: "login"
    });
  }
  validate(
    identity: Kakao.MeResponse,
    credentials: Kakao.Credentials
  ): boolean {
    throw new Error("Method not implemented.");
  }
  transform(identity: Kakao.MeResponse): Kakao.MeResponse {
    throw new Error("Method not implemented.");
  }
}
