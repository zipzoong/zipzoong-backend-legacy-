import { IDateTime, ISoftDeletable } from "@DTO/common";
import { IHSProvider } from "@DTO/user";

export namespace HSProvider {
  export const create = (
    input: IHSProvider.ICreate
  ): IHSProvider & IDateTime & ISoftDeletable => {
    throw Error();
  };
}
