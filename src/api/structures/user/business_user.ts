import { IHSProvider } from "./hs_provider";
import { IREAgent } from "./re_agent";
import { IUser } from "./user";

export type IBusinessUser = IREAgent | IHSProvider;

export namespace IBusinessUser {
  export type Type = Exclude<IUser.Type, "customer">;

  export interface IBase<T extends Type> extends IUser.IBase<T> {
    readonly phone: string;
    readonly profile_image_url: string;
    /**
     * 사업자 승인 여부
     *
     * 관리자에 의해서만 변경될 수 있습니다.
     */
    readonly is_verified: boolean;
    /**
     * 사업자 소개 정보
     */
    readonly introduction: IBusinessUser.IIntroduction;
    /**
     * 상위 전문 분야 id
     */
    readonly super_expertise_id: string;
    /**
     * 하위 전문 분야 id
     */
    readonly sub_expertise_ids: string[];
  }

  export interface ICreate<T extends Type> extends IUser.ICreate<T> {
    phone: string;
    profile_image_url: string;
    introduction: IIntroduction;
    super_expertise_id: string;
    sub_expertise_ids: string[];
  }

  export interface IExpertise {
    readonly id: string;
    readonly name: string;
  }

  export interface ICertification {
    readonly id: string;
    readonly image_url: string;
  }

  export interface IIntroduction {
    readonly title: string;
    readonly content: string;
  }

  /**
   * 개인 정보로서 본인 혹은 관리자만 확인 가능한 정보입니다.
   */
  export interface IPrivateData extends IUser.IPrivateData {
    /**
     * 사업자 증명 서류 사진 목록
     */
    readonly business_certifications: ICertification[];
  }

  /**
   * 전문 분야 표시 정보
   */
  export interface IExpertiseData {
    readonly super_expertise: IExpertise;
    readonly sub_expertises: IExpertise[];
  }
}
