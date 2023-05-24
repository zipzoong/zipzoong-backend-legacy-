import { IAddress } from "@DTO/common";
import { Mutable, Omit } from "@TYPE";
import { IUser } from "./user";

export interface ICustomer extends IUser.IBase<"customer"> {
  /**
   * @format ^[0-9]+$
   */
  readonly phone: string;
  readonly profile_image_url: string | null;
  readonly address: IAddress | null;
  /** @format date */
  readonly birth: string | null;
  readonly gender: "female" | "male" | "other" | null;
}

export namespace ICustomer {
  export interface IPrivate
    extends Omit<ICustomer, "phone">,
      IUser.IPrivateFragment {
    readonly phone: string | null;
  }

  export interface ICreate
    extends Omit<
      Mutable<ICustomer>,
      "type" | "id" | "phone" | "created_at" | "updated_at"
    > {
    phone: string | null;
    acceptant_agreement_ids: string[];
  }

  export type ICreateRequest = Omit<ICreate, "email" | "phone"> &
    IUser.ICreateRequest<"customer">;
}
