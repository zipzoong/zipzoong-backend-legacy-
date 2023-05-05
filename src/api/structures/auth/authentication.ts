import { IAddress } from "@DTO/common";
import { ICustomer } from "@DTO/user/customer";
import { IUser } from "@DTO/user/user";
import { IREAgent } from "@DTO/user/re_agent";
import { IHSProvider } from "@DTO/user/hs_provider";

export namespace Authentication {
  export type OauthType = "kakao";

  export interface ISignUp {
    code: string;
    oauth_type: OauthType;
  }

  export interface ISignIn extends ISignUp {
    user_type: IUser.Type;
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
    readonly gender: ICustomer["gender"];
    readonly address: IAddress | null;
  }

  export type ICreateRequest =
    | ICustomer.ICreateRequest
    | IREAgent.ICreateRequest
    | IHSProvider.ICreateRequest;
}
