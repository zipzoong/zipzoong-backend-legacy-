import { Mutable, Omit } from "@TYPE";
import { IUser } from "./user";

export interface ICustomer extends IUser<"customer"> {
  /**
   * 프로필 이미지
   */
  readonly profile_image_url?: string;
  /**
   * 사용자 주소 정보
   */
  readonly address?: IUser.IAddress;
  /**
   * 성벌
   * - female 여성
   * - male 남성
   * - other 기타
   */
  readonly gender?: IUser.GenderType;
  /**
   * 생일
   *
   * YYYY-MM-DD
   *
   * @format date
   */
  readonly birth?: string;
}

export namespace ICustomer {
  export interface ICreate
    extends Mutable<Omit<ICustomer, "id" | "created_at">> {}
}
