import { Omit } from "@TYPE";
import { IBusiness } from "./business";
import { IUser } from "./user";

export interface IHSProvider extends IBusiness.IBase<"home service provider"> {
  readonly phone: string;
  readonly profile_image_url: string;
  readonly is_verified: boolean;
  readonly introduction: IHSProvider.IIntroduction;
  readonly address: IUser.IAddress;
  readonly business_registration_num: string;
}

export namespace IHSProvider {
  export interface IIntroductionImage {
    readonly id: string;
    readonly image_url: string;
  }
  export interface IIntroduction extends IBusiness.IIntroduction {
    readonly images: IIntroductionImage[];
  }

  export interface ICreate extends IUser.ICreate<"home service provider"> {
    phone: string;
    profile_image_url: string;
    introduction: IIntroduction;
    address: IUser.IAddress;
    business_registration_num: string;
  }

  export interface ICreateRequest
    extends Partial<Omit<ICreate, "email" | "phone" | "introduction">> {
    /**
     * 이메일 인증 코드
     */
    email_access_code?: string;
    /**
     * 휴대폰 인증 코드
     */
    phone_access_code?: string;

    introduction?: IBusiness.IIntroduction;

    introduction_images?: string[];
  }
}