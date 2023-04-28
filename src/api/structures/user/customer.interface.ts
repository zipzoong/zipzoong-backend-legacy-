import { IDateTime } from "@DTO/common";
import { Omit } from "@TYPE";
import { IUser } from "./user.interface";

export interface ICustomer extends IUser.IBase<"customer"> {
  /**
   * YYYY-MM-DD
   * @format date
   */
  readonly birth: string | null;
  readonly gender: IUser.GenderType | null;
  readonly address: IUser.IAddress | null;
  readonly phone: string | null;
  readonly profile_image_url: string | null;
}

export namespace ICustomer {
  export interface ICreate extends IUser.ICreate<"customer"> {
    /**
     * YYYY-MM-DD
     * @format date
     */
    birth?: string;
    /**
     * 기본값 null
     */
    gender?: IUser.GenderType;
    /**
     * 기본값 null
     */
    address?: IUser.IAddress;
    /**
     * 기본값 null
     */
    phone?: string;
    /**
     * 기본값 null
     */
    profile_image_url?: string;
  }

  export interface ICreateRequest extends Omit<ICreate, "email" | "phone"> {
    /**
     * 이메일 인증 코드
     *
     * 포함하지 않으면 oauth profile email 정보가 email 기본값으로 사용된다.
     */
    email_access_code?: string;
    /**
     * 휴대폰 인증 코드
     *
     * 포함하지 않으면 oauth profile phone 정보가 phone 기본값으로 사용된다.
     */
    phone_access_code?: string;
    /**
     * 약관 동의 id 리스트
     */
    agreement_acceptances: string[];
  }

  /**
   * 응답 형식
   *
   * 고객 정보 조회 등에서 표시되는 형식
   */
  export type IResponse = ICustomer & IDateTime;

  /**
   * 개인 정보를 포함한 응답 형식
   *
   * 본인 혹은 관리자 API에 의해 표시되는 형식
   */
  export type IPrivateResponse = IResponse & IUser.IPrivateData;
}
