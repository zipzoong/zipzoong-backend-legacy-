import { Omit } from "@TYPE";
import { ICustomer } from "./customer";
import { IHomeCareCompany, IRealEstateAgent } from "./business";

export type IUser = ICustomer | IRealEstateAgent | IHomeCareCompany;

export namespace IUser {
  export type Type = "customer" | "business";

  export interface IBase<T extends Type = Type> {
    readonly user_type: T;
    readonly id: string;
    readonly name: string;
    readonly email: string | null;
    readonly email_verified: boolean;
    readonly phone: string | null;
    readonly phone_verified: boolean;
    readonly address_first: string | null;
    readonly address_second: string | null;
    readonly profile_image: string | null;
  }

  export interface ICreate extends Partial<Omit<IBase, "id">> {
    readonly type: Type;
  }
}
