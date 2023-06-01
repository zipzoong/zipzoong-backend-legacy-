import { IAddress } from "@DTO/common";
import { Mutable, Omit } from "@TYPE";
import { IUser } from "./user";

export type ICustomer =
  | ICustomer.ISummary
  | ICustomer.IPublic
  | ICustomer.IPrivate;

export namespace ICustomer {
  /**
   * public, private 공통 속성 기준
   *
   * 타입은 공통 속성의 합집합
   */
  export interface IBase<M extends IUser.Mode>
    extends IUser.IBase<"customer", M> {
    readonly profile_image_url: string | null;

    /**
     * @format ^[0-9]+$
     */
    readonly phone: string | null;
    readonly address: IAddress | null;
  }

  export type ISummary = Omit<IBase<"summary">, "email" | "phone" | "address">;

  export interface IPublic extends IBase<"public"> {
    readonly phone: string;
  }

  export interface IPrivate extends IBase<"private">, IUser.IPrivateFragment {
    /** @format date */
    readonly birth: string | null;
    readonly gender: "female" | "male" | "other" | null;
  }

  export interface ICreate
    extends Omit<
      Mutable<IPrivate>,
      | "type"
      | "mode"
      | "id"
      | "created_at"
      | "updated_at"
      | "acceptant_agreements"
    > {
    acceptant_agreement_ids: string[];
  }

  export type ICreateRequest = Omit<ICreate, "email" | "phone"> &
    IUser.ICreateRequest<"customer">;
}
