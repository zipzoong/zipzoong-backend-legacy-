import { IUser } from "./user";

export interface ICustomer extends IUser.IBase<"customer"> {
  readonly birth: string | null;
  readonly gender: string | null;
}
