import { Mutable, Omit } from "@TYPE";
import { IUser } from "./user";

export interface ICustomer extends IUser.IBase<"customer"> {
  /**
   * 생년월일
   *
   * YYMMDD
   * @pattern ^([0-9][0-9])(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$
   */
  readonly birth?: string;
  /**
   * 성별
   *
   * - female 여성
   * - male 남성
   * - other 기타
   */
  readonly gender?: ICustomer.Gender;
}

export namespace ICustomer {
  export type Gender = "female" | "male" | "other";
  export interface ICreate extends Mutable<Omit<ICustomer, "id">> {
    user_type: "customer";
  }
}
