import { IAddress } from "@DTO/common";
import { Mutable, Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { IUser } from "./user";

export interface IHSProvider extends IUser.IBase<"home service provider"> {
  readonly phone: string;
  readonly profile_image_url: string;
  readonly introduction: IHSProvider.IIntroduction;
  readonly super_expertise: IBusinessUser.ISuperExpertise;
  readonly sub_expertises: IBusinessUser.ISubExpertise[];
  readonly address: IAddress;
  readonly business_registration_num: string;
}

export namespace IHSProvider {
  export type IPrivate = IHSProvider & IBusinessUser.IPrivateFragment;
  export interface IIntroductionImage {
    readonly id: string;
    readonly url: string;
  }
  export interface IIntroduction extends IBusinessUser.IIntroduction {
    readonly images: IIntroductionImage[];
  }

  export interface ICreateIntroduction
    extends Mutable<IBusinessUser.IIntroduction> {
    image_urls: string[];
  }

  export interface ICreate
    extends Omit<
      Mutable<IHSProvider>,
      | "introduction"
      | "super_expertise"
      | "sub_expertises"
      | "id"
      | "created_at"
      | "updated_at"
      | "type"
    > {
    acceptant_agreement_ids: string[];
    introduction: ICreateIntroduction;
    super_expertise_id: string;
    sub_expertise_ids: string[];
  }

  export type ICreateRequest = Omit<ICreate, "email" | "phone"> &
    IBusinessUser.ICreateRequest<"home service provider">;
}
