import { IDateTime, IPage } from "@DTO/common";
import { Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { IUser } from "./user";

export interface IHSProvider
  extends IBusinessUser.IBase<"home service provider"> {
  readonly introduction: IHSProvider.IIntroduction;
  readonly address: IUser.IAddress;
  readonly business_registration_num: string;
}

export namespace IHSProvider {
  export interface IIntroductionImage {
    readonly id: string;
    readonly image_url: string;
  }

  export interface IIntroduction extends IBusinessUser.IIntroduction {
    /**
     * 자체 리뷰 이미지 목록
     */
    readonly images: IIntroductionImage[];
  }

  export interface ISearch extends IPage {
    /**
     * 검색 기준으로 사용할 상위 전문 분야 이름 목록
     */
    super_expert_name: string[];
    /**
     * 검색 기준으로 사용할 하위 전문 분야 이름 목록
     */
    sub_expert_name: string[];
  }

  export interface ICreate
    extends IBusinessUser.ICreate<"home service provider"> {
    /**
     * 자체 리뷰 이미지 주소 목록
     */
    introduction_images: string[];
    address: IUser.IAddress;
    /**
     * 사업자등록번호
     */
    business_registration_num: string;
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
     * 증명 서류 사진 url 리스트
     */
    business_certifications: string[];
    /**
     * 약관 동의 id 리스트
     */
    agreement_acceptances: string[];
  }

  /**
   * 응답 형식
   *
   * 사업자 정보 조회 등에서 표시되는 형식
   */
  export type IResponse = Omit<
    IHSProvider,
    "super_expertise_id" | "sub_expertise_ids"
  > &
    IDateTime &
    IBusinessUser.IExpertiseData;

  /**
   * 개인 정보를 포함한 응답 형식
   *
   * 본인 혹은 관리자 API에 의해 표시되는 형식
   */
  export type IPrivateResponse = IResponse & IUser.IPrivateData;
}
