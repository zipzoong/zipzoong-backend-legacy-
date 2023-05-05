import { IPage } from "@DTO/common";
import { IUser } from "./user";

export namespace IBusinessUser {
  export type Type = Exclude<IUser.Type, "customer">;
  export interface ISuperExpertise {
    readonly super_category_id: string;
    readonly name: string;
  }
  export interface ISubExpertise {
    readonly sub_category_id: string;
    readonly name: string;
  }
  export interface IIntroduction {
    readonly title: string;
    readonly content: string;
  }

  export interface ICertificationImage {
    readonly id: string;
    readonly url: string;
  }

  export interface IPrivateFragment extends IUser.IPrivateFragment {
    /** 사업자 인증 완료 여부 */
    readonly is_verified: boolean;
    /** 사업자 증명 서류 사진 목록 */
    readonly business_certifications: ICertificationImage[];
  }

  export interface ISearch extends IPage {
    super_category_name?: string;
    sub_category_name?: string;
  }

  export type ICreateRequest<T extends Type> = IUser.ICreateRequest<T>;
}
