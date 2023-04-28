import { IAgreement } from "@DTO/agreement";
import { IBusinessUser } from "./business_user.interface";
import { ICustomer } from "./customer.interface";

export type IUser = ICustomer | IBusinessUser;

export namespace IUser {
  export type Type = "customer" | "real estate agent" | "home service provider";

  export type GenderType = "female" | "male" | "other";

  export interface IAddress {
    readonly first: string;
    readonly second: string | null;
  }

  export interface IBase<T extends Type> {
    /**
     * 사용자 분류
     *
     * - customer 일반 회원
     * - real estate agent 공인중개사
     * - home service provider 생활서비스 제공자
     */
    readonly type: T;
    readonly id: string;
    /**
     * 고객 이름 혹은 상호명
     */
    readonly name: string;
    /**
     * @format email
     */
    readonly email: string | null;
  }

  export interface IPrivateData {
    /**
     * 약관 동의 목록
     */
    readonly agreement_acceptances: IAgreement[];
  }

  export interface ICreate<T extends Type> {
    /**
     * 사용자 분류
     *
     * - customer 일반 회원
     * - real estate agent 공인중개사
     * - home service provider 생활서비스 제공자
     */
    type: T;
    /**
     * 기본값 ""
     */
    name?: string;
    /**
     * 기본값 null
     *
     * @format email
     */
    email?: string;
  }
}
