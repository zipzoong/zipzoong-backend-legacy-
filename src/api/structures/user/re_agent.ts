import { IAddress, IPage, IPaginatedResponse as IPaginated } from "@DTO/common";
import { IREProperty } from "@DTO/re_property";
import { Mutable } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { IUser } from "./user";

export type IREAgent = IREAgent.ISummary | IREAgent.IPublic | IREAgent.IPrivate;

export namespace IREAgent {
  /** public, private 공통 속성 */
  export interface IBase<M extends IUser.Mode>
    extends IUser.IBase<"real estate agent", M> {
    /**
     * 가입자 전화번호
     *
     * @format ^[0-9]+$
     */
    readonly phone: string;
    readonly profile_image_url: string;
    readonly introduction: IBusinessUser.IIntroduction;
    readonly expertise: IBusinessUser.IExpertise;
    /**
     * 개업/소속 공인중개사 구분
     *
     * true: 개업
     * false: 소속
     */
    readonly is_licensed: boolean;
    /**
     * 부동산 정보
     */
    readonly real_estate: IRealEstate;
    /**
     * 부동산 매물 목록
     */
    readonly properties: IProperty[];
  }

  export type ISummary = Pick<
    IBase<"summary">,
    | "type"
    | "mode"
    | "id"
    | "name"
    | "introduction"
    | "profile_image_url"
    | "expertise"
    | "is_licensed"
    | "created_at"
    | "updated_at"
  >;

  export interface IPublic extends IBase<"public"> {
    readonly properties: IProperty.IPublic[];
  }

  export interface IPrivate
    extends IBase<"private">,
      IBusinessUser.IPrivateFragment {
    readonly properties: IProperty.IPrivate[];
  }

  export interface IRealEstate {
    /** 부동산개설등록번호 */
    readonly num: string;
    /** 부동산 상호명 */
    readonly name: string;
    /** 부동산 전화번호 */
    readonly phone: string;
    /** 부동산 대표자 이름 */
    readonly licensed_agent_name: string;
    /** 부동산 주소 */
    readonly address: IAddress;
  }

  export type IProperty = IProperty.IPublic | IProperty.IPrivate;

  export namespace IProperty {
    export type IPublic = Pick<
      IREProperty.ISummary,
      | "id"
      | "name"
      | "main_image_url"
      | "sub_categories"
      | "created_at"
      | "updated_at"
    >;
    export interface IPrivate extends IPublic {
      readonly is_visible: boolean;
    }

    export interface ISearch extends IPage {
      sub_category_id?: string;
      middle_category_id?: string;
      super_category_id?: string;
    }
    export type IPaginatedPublicResponse = IPaginated<IPublic>;
    export type IPaginatedPrivateResponse = IPaginated<IPrivate>;
  }

  export interface ICreate
    extends Pick<
      Mutable<IPrivate>,
      | "name"
      | "phone"
      | "email"
      | "introduction"
      | "profile_image_url"
      | "is_licensed"
      | "real_estate"
    > {
    /** 동의 약관 id 목록 */
    acceptant_agreement_ids: string[];
    sub_expertise_ids: string[];
    business_certification_image_urls: string[];
  }

  export type ICreateRequest = Pick<
    ICreate,
    | "name"
    | "introduction"
    | "profile_image_url"
    | "is_licensed"
    | "real_estate"
    | "acceptant_agreement_ids"
    | "sub_expertise_ids"
    | "business_certification_image_urls"
  > &
    IBusinessUser.ICreateRequest<"real estate agent">;

  export type IPaginatedResponse = IPaginated<ISummary>;
}
