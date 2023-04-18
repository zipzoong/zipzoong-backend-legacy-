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
   * @tag oauth
   * @tag authentication
   * @param body oauth 로그인 요청 정보
   * @returns 로그인 토큰 정보
   */
  @Post("sign-in/oauth")
  findAccessor(@TypedBody() body: IAccessor.ISignInBody): Promise<IAccessor> {
    return AuthService.signIn(body);
  }

  /**
   * Oauth2.0 회원가입 요청
   *
   * @summary Oauth 회원가입 API
   * @tag oauth
   * @tag authentication
   * @param body oauth 회원가입 요청 정보
   * @returns 응답 데이터 없음
   */
  @Post("sign-up/oauth")
  createAccessor(@TypedBody() body: IAccessor.ISignUpBody): Promise<void> {
    return AuthService.signUp(body);
  }
}
