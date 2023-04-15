import { IUser } from "./user";

export interface IAccessor {
  readonly id: string;
  readonly oauth_type: IAccessor.OuathType;
  readonly oauth_sub: string;
  readonly business_user_id: string | null;
  readonly customer_id: string | null;
}

export namespace IAccessor {
  export type OuathType = "kakao" | "naver";

  export interface IOauthSignIn {
    readonly oauth_type: OuathType;
    readonly user_type: IUser.Type;
    readonly code: string;
  }
}
