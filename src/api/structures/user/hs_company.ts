import { Mutable, Omit } from "@TYPE";
import { IBusinessUser } from "./business";
import { IUser } from "./user";

export interface IHSCompany extends IBusinessUser<"home service"> {
  /**
   * 사업자등록번호
   */
  readonly business_num: string;
  /**
   * 회사 주소
   */
  readonly address: IUser.IAddress;
}

export namespace IHSCompany {
  export interface Image {}
  export interface IIntroduction extends IBusinessUser.IIntroduction {}

  export interface ICreate
    extends Mutable<Omit<IHSCompany, "id" | "created_at">> {}
}
