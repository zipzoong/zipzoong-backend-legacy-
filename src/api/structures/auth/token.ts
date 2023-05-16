import { IUser } from "../user/user";

export interface ITokens {
  readonly access_token: string;
}

export namespace ITokens {
  export type AuthorizationHeaderTokenType = "basic" | "bearer";
  export type AccessTokenType = "account" | "user";

  interface AccessTokenPayloadBase<T extends AccessTokenType> {
    readonly type: T;
  }

  export interface IAccountPayload extends AccessTokenPayloadBase<"account"> {
    readonly account_id: string;
  }

  export interface IUserPayload<T extends IUser.Type = IUser.Type>
    extends AccessTokenPayloadBase<"user"> {
    readonly user_id: string;
    readonly user_type: T;
  }

  export type IAccessTokenPayload = IAccountPayload | IUserPayload;
}
