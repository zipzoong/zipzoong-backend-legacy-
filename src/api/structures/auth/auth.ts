import { ICustomer, IHSProvider, IREAgent, IUser } from "../user";
import { IOauthProfile } from "./oauth-profile";

export namespace Authentication {
  export type OauthType = "kakao" | "naver";

  export interface ISignUp {
    code: string;
    oauth_type: OauthType;
  }

  export interface ISignIn extends ISignUp {
    user_type: IUser.Type;
  }

  export interface ICreateUser {
    user:
      | ICustomer.ICreateRequest
      | IREAgent.ICreateRequest
      | IHSProvider.ICreateRequest;
    /**
     * 기본값으로 OauthProfile 값을 사용할지에 대한 설정
     *
     * 해당 설정의 기본값 true
     */
    default: Partial<Record<keyof IOauthProfile, boolean>>;
  }
}
