import {
  IAddress,
  IDateTime,
  IPage,
  IPaginatedResponse as IPaginated
} from "@DTO/common";
import { Mutable, Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { IUser } from "./user";

export type IHSProvider =
  | IHSProvider.ISummary
  | IHSProvider.IPublic
  | IHSProvider.IPrivate;

export namespace IHSProvider {
  export interface IBase<M extends IUser.Mode>
    extends IUser.IBase<"home service provider", M> {
    /**
     * @format ^[0-9]+$
     */
    readonly phone: string;
    readonly profile_image_url: string;
    readonly introduction: IBusinessUser.IIntroduction;
    readonly expertise: IBusinessUser.IExpertise;
    readonly example_images: IHSProvider.IExampleImage[];
    readonly address: IAddress;
    readonly business_registration_num: string;
  }

  export type ISummary = Omit<
    IBase<"summary">,
    "business_registration_num" | "example_images" | "phone" | "email"
  >;

  export interface IPublic extends IBase<"public"> {
    readonly example_images: IExampleImage.IPublic[];
  }

  export interface IPrivate
    extends IBase<"private">,
      IBusinessUser.IPrivateFragment {
    readonly example_images: IExampleImage.IPrivate[];
  }

  export type IExampleImage = IExampleImage.IPublic | IExampleImage.IPrivate;

  export namespace IExampleImage {
    export interface IPublic extends IDateTime {
      readonly id: string;
      readonly url: string;
    }
    export interface IPrivate extends IPublic {
      /** 게시 상태 */
      readonly is_visible: boolean;
    }
    export interface ISearch extends IPage {}
    export type IPaginatedPublicResponse = IPaginated<IPublic>;
    export type IPaginatedPrivateResponse = IPaginated<IPrivate>;
  }

  export interface ICreate
    extends Omit<
      Mutable<IPrivate>,
      | "type"
      | "mode"
      | "id"
      | "created_at"
      | "updated_at"
      | "expertise"
      | "example_images"
      | "is_verified"
      | "acceptant_agreements"
      | "business_certification_images"
    > {
    /** 동의 약관 id 목록 */
    acceptant_agreement_ids: string[];
    sub_expertise_ids: string[];
    business_certification_image_urls: string[];
    example_image_urls: string[];
  }

  export type ICreateRequest = Omit<ICreate, "email" | "phone"> &
    IBusinessUser.ICreateRequest<"home service provider">;

  export type IPaginatedResponse = IPaginated<ISummary>;
}
