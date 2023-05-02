import { IDateTime, IPage } from "@DTO/common";
import { Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { IUser } from "./user";

export interface IREAgent extends IBusinessUser.IBase<"real estate agent"> {
  /**
   * 개업/소속 공인중개사 표시
   *
   * - true 개업 공인중개사
   * - false 소속 공인중개사
   */
  readonly is_licensed: boolean;
  /**
   * 본인이 속한 부동산 정보
   */
  readonly real_estate: IREAgent.IRealEstate;
}

export namespace IREAgent {
  export interface IRealEstate {
    /**
     * 부동산 개설 등록번호
     */
    readonly num: string;
    /**
     * 부동산 상호명
     */
    readonly name: string;
    /**
     * 부동산 전화번호
     */
    readonly phone: string;
    /**
     * 부동산 대표명
     */
    readonly licensed_agent_name: string;
    /**
     * 부동산 주소
     */
    readonly address: IUser.IAddress;
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

  export interface ICreate extends IBusinessUser.ICreate<"real estate agent"> {
    /**
     * 개업/소속 공인중개사 표시
     *
     * - true 개업 공인중개사
     * - false 소속 공인중개사
     */
    is_licensed: boolean;
    /**
     * 본인이 속한 부동산 정보
     */
    real_estate: IREAgent.IRealEstate;
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
    IREAgent,
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
