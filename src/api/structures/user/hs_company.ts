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

  readonly introduction: IHSCompany.IIntroduction;
}

export namespace IHSCompany {
  export interface IIntroductionImage {
    /**
     * 이미지 고유 식별 id
     */
    readonly id: string;
    /**
     * 이미지 주소
     */
    readonly url: string;
  }
  export interface IIntroduction extends IBusinessUser.IIntroduction {
    readonly images: IIntroductionImage[];
  }

  export interface ICreate
    extends Mutable<Omit<IHSCompany, "id" | "created_at" | "introduction">> {
    /**
     * 자기 소개
     */
    introduction: IBusinessUser.IIntroduction;
  }
}
