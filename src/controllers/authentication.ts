import { IAuthentication, ITokens } from "@DTO/auth";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller, HttpCode, HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { Authorization } from "./decorators";

@Controller("auth/sign-in")
export class SignInController {
  /**
   * 전달된 정보에 대응하는 특정 회원에 대한 권한이 부여된 인증 토큰을 발급한다.
   *
   * @summary 로그인
   * @tag authentication
   * @param body oauth code, oauth type, user_type
   * @return tokens
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @HttpCode(HttpStatus.OK)
  @TypedRoute.Post()
  execute(@TypedBody() body: IAuthentication.ISignIn): Promise<ITokens> {
    return Authentication.Service.signIn(body);
  }
}

@Controller("auth/sign-up")
export class SignUpController {
  /**
   * 회원을 생성하거나 oauth-profile 요청을 위한 인증 토큰을 발급한다.
   *
   * accessor에 포함된 정보는 회원 정보에 기본값으로 사용할 수 있다.
   *
   * @summary 회원가입
   * @tag authentication
   * @param body oauth code, oauth type
   * @return tokens
   * @throw 403 Forbidden
   */
  @TypedRoute.Post()
  execute(@TypedBody() body: IAuthentication.ISignUp): Promise<ITokens> {
    return Authentication.Service.signUp(body);
  }
}

@Controller("auth/profile")
export class ProfileController {
  /**
   * 새로운 회원 정보를 생성할 때, 입력창 기본값을 채우기 위해 사용한다.
   *
   * @summary 소셜 계정 프로필 정보 조회
   * @tag authentication
   * @return OauthProfile
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @TypedRoute.Get()
  get(
    @Authorization("basic") token: string
  ): Promise<IAuthentication.IProfile> {
    const { accessor_id } =
      Authentication.Crypto.getAccessorTokenPayload(token);
    return Authentication.Service.getProfile(accessor_id);
  }
}

@Controller("auth/user")
export class UserCreateController {
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
   * @summary 사용자 생성
   * @tag authentication
   * @tag users
   * @param body 사용자 생성 정보
   * @return void
   * @throw 400 BadRequest
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @TypedRoute.Post()
  create(
    @Authorization("basic") token: string,
    @TypedBody() body: IAuthentication.ICreateRequest
  ): Promise<void> {
    const { accessor_id } =
      Authentication.Crypto.getAccessorTokenPayload(token);
    return Authentication.Service.createUser(accessor_id, body);
  }
}
