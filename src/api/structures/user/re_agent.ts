import { Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { IUser } from "./user";

export interface IREAgent extends IBusinessUser.IBase<"real estate agent"> {
  readonly is_licensed: boolean;
  readonly real_estate: IREAgent.IRealEstate;
}

export namespace IREAgent {
  export interface IRealEstate {
    readonly num: string;
    readonly name: string;
    readonly phone: string;
    readonly licensed_agent_name: string;
    readonly address: IUser.IAddress;
  }

  export interface ICreate extends IUser.ICreate<"real estate agent"> {
    phone: string;
    profile_image_url: string;
    introduction: IBusinessUser.IIntroduction;
    is_licensed: boolean;
    real_estate: IREAgent.IRealEstate;
    expertise_ids: string[];
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
}
