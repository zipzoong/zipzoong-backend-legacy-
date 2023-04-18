import { IUser } from "./user";

/**
 * 회원 정보 접근자
 *
 * 인증 정보를 담고 있으며, 해당 접근자와 연결된 회원 권한을 요청할 수 있다.
 */
export interface IAccessor {
  /**
   * 사용자 인증 토큰
   */
  readonly access_token: string;
}

export namespace IAccessor {
  export type OauthType = "kakao" | "naver";

  export interface IAccessTokenPayload {
    /**
     * 임시 데이터 유무
     * - true 실제 계정 생성이 이루어지지 않은 상태
     * - false 실제 계정 id
     */
    readonly is_temp: boolean;
    /**
     * 사용자 분류
     */
    readonly user_type: IUser.Type;
    /**
     * 사용자 id
     */
    readonly id: string;
  }

  export interface ISignInBody {
    readonly code: string;
    readonly oauth_type: OauthType;
    readonly user_type: IUser.Type;
  }

  export type ISignUpBody = ISignInBody;
}
