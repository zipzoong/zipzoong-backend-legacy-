import { IUser } from "@DTO/user/user";

export namespace IToken {
  export type Type = "account" | "access" | "refresh";

  export interface IPayloadBase<T extends Type> {
    readonly type: T;
    /** @format date-time */
    readonly expired_at: string;
  }

  export interface IAccountPayload extends IPayloadBase<"account"> {
    readonly account_id: string;
  }

  export interface IAccessPayload<T extends IUser.Type>
    extends IPayloadBase<"access"> {
    readonly user_id: string;
    readonly user_type: T;
  }

  export interface IRefreshPayload extends IPayloadBase<"refresh"> {
    readonly user_id: string;
    readonly user_type: IUser.Type;
  }
}
