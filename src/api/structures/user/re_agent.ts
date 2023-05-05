import { IAddress } from "@DTO/common";
import { Mutable, Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { IUser } from "./user";

export interface IREAgent extends IUser.IBase<"real estate agent"> {
  /** 가입자 전화번호 */
  readonly phone: string;
  readonly profile_image_url: string;
  readonly introduction: IBusinessUser.IIntroduction;
  readonly super_expertise: IBusinessUser.ISuperExpertise;
  readonly sub_expertises: IBusinessUser.ISubExpertise[];
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
  readonly real_estate: IREAgent.IRealEstate;
}

export namespace IREAgent {
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

  export type IPrivate = IREAgent & IBusinessUser.IPrivateFragment;

  export interface ICreate
    extends Omit<
      Mutable<IREAgent>,
      | "id"
      | "super_expertise"
      | "sub_expertises"
      | "created_at"
      | "updated_at"
      | "type"
    > {
    /** 동의 약관 id 목록 */
    acceptant_agreement_ids: string[];
    super_expertise_id: string;
    sub_expertise_ids: string[];
  }

  export type ICreateRequest = Omit<ICreate, "email" | "phone"> &
    IBusinessUser.ICreateRequest<"real estate agent">;
}
