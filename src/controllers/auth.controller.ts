import { AuthService } from "@APP/user/auth";
import { IAccessor } from "@DTO/user";
import { TypedBody } from "@nestia/core";
import { Controller, Post } from "@nestjs/common";

@Controller()
export class AuthController {
  /**
   * Oauth2.0 로그인 요청
   *
   * @summary Oauth 로그인 API
   * @param body oauth 로그인 요청 정보
   * @returns 로그인 토큰 정보
   */
  @Post("sign-in/oauth")
  singIn(@TypedBody() body: IAccessor.ISignInBody): Promise<IAccessor> {
    return AuthService.signIn(body);
  }
}
