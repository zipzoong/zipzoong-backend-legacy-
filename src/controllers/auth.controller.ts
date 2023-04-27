import { Authentication, ITokens } from "@DTO/auth";
import { TypedBody } from "@nestia/core";
import { Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";

@Controller("auth")
export class AuthenticationController {
  /**
   * 전달된 정보에 대응하는 특정 회원에 대한 권한이 부여된 인증 토큰을 발급한다.
   *
   * @summary 로그인 API
   * @tag authentication
   * @param body oauth code, oauth type, user_type
   * @returns tokens
   * @throw 401 Unauthorized
   * @throw 404 Not Found
   */
  @HttpCode(HttpStatus.OK)
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
   * 새로운 회원 정보를 생성할 때, 입력창 기본값을 채우기 위해 사용한다.
   *
   * @summary OauthProfile 요청 API
   * @tag authentication
   * @returns OauthProfile
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @Get("profile")
  getOauthProfile(): Promise<Authentication.IOauthProfile> {
    throw Error();
  }

  /**
   * type 속성을 통해 사용자 분류를 구분한다.
   *
   * 사용자 분류에 따라 포함하는 속성이 달라진다.
   *
   * 다른 속성값은 null, "" 등의 속성 기본값이 사용되지만 email, phone은 OauthProfile 정보가 기본값으로 사용된다.
   *
   * 사업자의 경우, phone 정보가 필수다.
   *
   * OauthProfile phone 정보가 없고, 인증코드도 요청에 포함하지 않았다면 요청은 실패한다.
   *
   * @summary 사용자 생성 API
   * @tag authentication
   * @param body 사용자 생성 정보
   * @returns void
   * @throw 400 BadRequest
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @Post("user")
  create(@TypedBody() body: Authentication.ICreateRequest): Promise<void> {
    throw Error();
  }
}
