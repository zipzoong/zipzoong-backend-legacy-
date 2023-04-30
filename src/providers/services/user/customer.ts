import { IDateTime, ISoftDeletable } from "@DTO/common";
import { ICustomer } from "@DTO/user";

export namespace Customer {
  export const create = (
    input: ICustomer.ICreate
  ): ICustomer & IDateTime & ISoftDeletable => {
    throw Error();
  };
}
