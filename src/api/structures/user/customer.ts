import { Omit } from "@TYPE";
import { IUser } from "./user";

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
     * 기본값 null
     *
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
     */
    email_access_code?: string;
    /**
     * 휴대폰 인증 코드
     */
    phone_access_code?: string;
  }
}
