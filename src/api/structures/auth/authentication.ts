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

  export interface IProfile {
    readonly name: string | null;
    readonly email: string | null;
    readonly phone: string | null;
    readonly profile_image_url: string | null;
    /**
     * YYYY-MM-DD
     * @format date
     */
    readonly birth: string | null;
    readonly gender: IUser.GenderType | null;
    readonly address: IUser.IAddress | null;
  }

  export type ICreateRequest =
    | ICustomer.ICreateRequest
    | IREAgent.ICreateRequest
    | IHSProvider.ICreateRequest;
}
