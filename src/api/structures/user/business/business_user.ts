import { IUser } from "../user";

export namespace IBusinessUser {
  export type Type = "real estate" | "home care";

  export interface IBase<T extends Type = Type>
    extends IUser.IBase<"business"> {
    readonly business_type: T;
    readonly email: string;
    readonly phone: string;
    readonly address_first: string;

    readonly is_verified: boolean;
    readonly introduction_title: string;
    readonly introduction_content: string;
  }

  export interface IUnVerifiedBase<T extends Type = Type>
    extends IUser.IBase<"business"> {
    readonly business_type: T;
    readonly is_verified: false;
    readonly introduction_title: string;
    readonly introduction_content: string;
  }

  export interface ICreate<T extends Type = Type>
    extends IUser.ICreate<"business"> {
    business_type: T;
    introduction_title?: string;
    introduction_content?: string;
  }
}
