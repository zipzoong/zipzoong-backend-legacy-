import { Authentication, IOauthProfile, ITokens } from "@DTO/auth";
import { TypedBody } from "@nestia/core";
import { Controller, Get, Post } from "@nestjs/common";

@Controller("auth")
export class AuthenticationController {
  /**
   * 전달된 정보에 대응하는 특정 회원에 대한 권한이 부여된 인증 토큰을 발급한다.
   *
   * @summary 로그인 API
   * @tag authentication
   * @param body oauth code, oauth type, user_type
   * @returns tokens
   */
  @Post("sign-in")
  signIn(@TypedBody() body: Authentication.ISignIn): Promise<ITokens> {
    throw Error("");
  }

  /**
   * 회원을 생성하거나 oauth-profile 요청을 위한 인증 토큰을 발급한다.
   *
   * accessor에 포함된 정보는 회원 정보에 기본값으로 사용할 수 있다.
   *
   * @summary 회원가입 API
   * @tag authentication
   * @param body oauth code, oauth type
   * @returns tokens
   */
  @Post("sign-up")
  signUp(@TypedBody() body: Authentication.ISignUp): Promise<ITokens> {
    throw Error("");
  }

  /**
   * @summary OauthProfile 요청 API
   * @tag authentication
   * @returns OauthProfile
   */
  @Get("oauth-profile")
  getOauthProfile(): Promise<IOauthProfile> {
    throw Error();
  }

  /**
   * @summary 사용자 생성 API
   * @tag authentication
   * @param body 사용자 생성 정보
   * @returns void
   */
  @Post("user")
  createUser(@TypedBody() body: Authentication.ICreateUser): Promise<void> {
    throw Error();
  }
}
