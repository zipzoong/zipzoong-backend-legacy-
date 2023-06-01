import { IDateTime, IPage } from "@DTO/common";
import { IHSProvider } from "./hs_provider";
import { IREAgent } from "./re_agent";
import { IUser } from "./user";

export namespace IBusinessUser {
  export type Type = Exclude<IUser.Type, "customer">;

  export interface IExpertise {
    readonly super_category_id: string;
    readonly super_category_name: string;
    readonly sub_expertises: ISubExpertise[];
  }

  export interface ISubExpertise {
    readonly sub_category_id: string;
    readonly sub_category_name: string;
  }

  export interface IIntroduction {
    readonly title: string;
    readonly content: string;
  }

  export interface ICertificationImage extends IDateTime {
    readonly id: string;
    readonly url: string;
  }

  export interface IPrivateFragment extends IUser.IPrivateFragment {
    /** 사업자 인증 완료 여부 */
    readonly is_verified: boolean;
    /** 사업자 증명 서류 사진 목록 */
    readonly business_certification_images: ICertificationImage[];
  }

  export interface ISearch extends IPage {
    super_category_id?: string;
    sub_category_id?: string;
  }

  export type ICreate = IREAgent.ICreate | IHSProvider.ICreate;

  export type ICreateRequest<T extends Type> = IUser.ICreateRequest<T>;
}
