import { IAddress } from "@DTO/common";
import { ICustomer } from "@DTO/user/customer";
import { IUser } from "@DTO/user/user";
import { IREAgent } from "@DTO/user/re_agent";
import { IHSProvider } from "@DTO/user/hs_provider";

export namespace IAuthentication {
  export type OauthType = "kakao";

  export interface ISignUp {
    code: string;
    oauth_type: OauthType;
  }
  export type IResponse = IAccessToken & IRefreshToken;

  export interface ISignIn extends ISignUp {
    user_type: IUser.Type;
  }

  export interface IAccountToken {
    /**
     * 회원 가입시 발급됩니다.
     *
     * 다음과 같은 작업을 할 수 있습니다.
     * - 사용자 정보 생성
     * - 계정 프로필 조회
     */
    readonly account_token: string;
  }

  export interface IAccessToken {
    /**
     * 특정 사용자 정보에 대한 권한을 가지고 있습니다.
     */
    readonly access_token: string;
    /**
     * access_token 만료일자
     * @format date-time
     */
    readonly access_token_expired_at: string;
  }

  export interface IRefreshToken {
    /**
     * 특정 사용자 정보에 대한 access token을 재발급 받기 위해 사용합니다.
     */
    readonly refresh_token: string;
    /**
     * refresh_token 만료일자
     * @format date-time
     */
    readonly refresh_token_expired_at: string;
  }

  export interface IProfile {
    readonly name: string | null;
    /** @format email */
    readonly email: string | null;
    readonly phone: string | null;
    readonly profile_image_url: string | null;
    /**
     * YYYY-MM-DD
     * @format date
     */
    readonly birth: string | null;
    readonly gender: ICustomer.IPrivate["gender"];
    readonly address: IAddress | null;
  }

  export type ICreateRequest =
    | ICustomer.ICreateRequest
    | IREAgent.ICreateRequest
    | IHSProvider.ICreateRequest;
}
