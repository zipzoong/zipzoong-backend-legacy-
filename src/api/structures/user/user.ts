import { IAgreement } from "@DTO/agreement";
import { IDateTime } from "@DTO/common";
import { Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { ICustomer } from "./customer";

export namespace IUser {
  export type Type = "customer" | "real estate agent" | "home service provider";
  export type Mode = "summary" | "public" | "private";

  export interface IBase<T extends Type, M extends Mode> extends IDateTime {
    /**
     * 사용자 분류
     *
     * - customer 일반 회원
     * - real estate agent 공인중개사
     * - home service provider 생활서비스 제공자
     */
    readonly type: T;
    readonly mode: M;
    readonly id: string;
    readonly name: string;
    /** @format email */
    readonly email: string | null;
  }

  export type IAcceptantAgreement = Omit<
    IAgreement,
    "created_at" | "updated_at"
  >;

  export interface IPrivateFragment {
    /** 동의한 약관 목록 */
    readonly acceptant_agreements: IAcceptantAgreement[];
  }

  export type ICreate = ICustomer.ICreate | IBusinessUser.ICreate;

  export interface ICreateRequest<T extends Type> {
    type: T;
    email_verification_id: string | null;
    phone_verification_id: string | null;
  }
}
