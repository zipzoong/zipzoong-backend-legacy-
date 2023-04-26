import { IUser } from "../user";

export interface ITokens {
  readonly access_token: string;
}

export namespace ITokens {
  export type AccessTokenType = "accessor" | "user";

  interface AccessTokenPayloadBase<T extends AccessTokenType> {
    readonly type: T;
  }

  export interface IOauthPayload extends AccessTokenPayloadBase<"accessor"> {
    readonly accessor_id: string;
  }

  export interface IUserPayload extends AccessTokenPayloadBase<"user"> {
    readonly user_id: string;
    readonly user_type: IUser.Type;
  }

  export type IAccessTokenPayload = IOauthPayload | IUserPayload;
}
