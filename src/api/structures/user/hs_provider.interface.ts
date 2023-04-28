import { IDateTime } from "@DTO/common";
import { Omit } from "@TYPE";
import { IBusinessUser } from "./business_user.interface";
import { IUser } from "./user.interface";

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
    readonly images: IIntroductionImage[];
  }

  export interface ICreate extends IUser.ICreate<"home service provider"> {
    phone: string;
    profile_image_url: string;
    introduction: IBusinessUser.IIntroduction;
    introduction_images: string[];
    address: IUser.IAddress;
    business_registration_num: string;
    sub_expertise_ids: string[];
    super_expertise_id: string;
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

  export type IResponse = Omit<
    IHSProvider,
    "super_expertise_id" | "sub_expertise_ids"
  > &
    IDateTime &
    IBusinessUser.IExpertiseData;

  export type IPrivateResponse = IResponse & IUser.IPrivateData;
}
