import { ICustomer, IHSProvider, IREAgent, IUser } from "../user";

export namespace Authentication {
  export type OauthType = "kakao" | "naver";

  export interface ISignUp {
    code: string;
    oauth_type: OauthType;
  }

  export interface ISignIn extends ISignUp {
    user_type: IUser.Type;
  }

  export type ICreateRequest =
    | ICustomer.ICreateRequest
    | IREAgent.ICreateRequest
    | IHSProvider.ICreateRequest;
}
