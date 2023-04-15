import { IUser } from "./user";

export interface ICustomer extends IUser.IBase<"customer"> {
  /**
   * 생년월일
   *
   * YYMMDD
   * @pattern ^([0-9][0-9])(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$
   */
  readonly birth: string | null;
  /**
   * 성별
   *
   * - female 여성
   * - male 남성
   * - other 기타
   */
  readonly gender: "female" | "male" | "other" | null;
}

export namespace ICustomer {
  export interface ICreate extends IUser.ICreate {
    user_type: "customer";
    birth?: string;
    gender?: "female" | "male" | "other";
  }
}
