import { IBusinessUser } from "./business_user.interface";
import { ICustomer } from "./customer.interface";

export type IUser = ICustomer | IBusinessUser;

export namespace IUser {
  export type Type = "customer" | "real estate agent" | "home service provider";

  export type GenderType = "female" | "male" | "other";

  export interface IAddress {
    readonly first: string;
    readonly second: string | null;
  }

  export interface IBase<T extends Type> {
    readonly type: T;
    readonly id: string;
    readonly name: string;
    /**
     * @format email
     */
    readonly email: string | null;
  }

  export interface ICreate<T extends Type> {
    type: T;
    /**
     * 기본값 ""
     */
    name?: string;
    /**
     * 기본값 null
     *
     * @format email
     */
    email?: string;
  }
}

// 약관 동의, 전문 분야...
