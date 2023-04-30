import { Kakao } from "@devts/nestjs-auth";

export class KakaoStrategy extends Kakao.AbstractStrategy<"oauth"> {
  constructor() {
    super({} as any);
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
