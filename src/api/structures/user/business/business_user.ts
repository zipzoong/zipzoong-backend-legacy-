import { Mutable, Omit } from "@TYPE";
import { IUser } from "../user";

export namespace IBusinessUser {
  export type Type = "real estate" | "home care";

  export type MetaData<T extends Type> = {
    /**
     * 인증된 사업자
     *
     * 휴대폰 인증이 완료되어야 하며, 수동으로 관리자에 의해 인증이 진행된다.
     */
    readonly is_verified: boolean;
    /**
     * 비즈니스 유형을 나타냄
     * - real estate 공인중개사
     * - home care 생활서비스 회사
     */
    readonly business_type: T;
    /**
     * 사업자 소개글 제목
     */
    readonly introduction_title: string;
    /**
     * 사업자 소개글 본문
     */
    readonly introduction_content: string;
  };

  export interface IVerified<T extends Type = Type>
    extends IUser.IBase<"business">,
      MetaData<T> {
    readonly is_verified: true;
    readonly phone: string;
    readonly phone_verified: true;
    readonly address_first: string;
  }

  export interface IUnVerified<T extends Type = Type>
    extends IUser.IBase<"business">,
      MetaData<T> {
    readonly is_verified: false;
    readonly business_type: T;
  }

  export interface ICreate<T extends Type = Type>
    extends IUser.ICreate<"business">,
      Partial<Omit<Mutable<MetaData<T>>, "is_verified">> {
    business_type: T;
  }
}
