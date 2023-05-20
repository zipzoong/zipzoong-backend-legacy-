import { IAddress, IPaginatedResponse as IPaginated } from "@DTO/common";
import { Mutable, Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";
import { IUser } from "./user";

export interface IHSProvider extends IUser.IBase<"home service provider"> {
  readonly phone: string;
  readonly profile_image_url: string;
  readonly review_stats: IBusinessUser.IReviewStats;
  readonly introduction: IBusinessUser.IIntroduction;
  readonly expertise: IBusinessUser.IExpertise;
  readonly example_images: IHSProvider.IExampleImage[];
  readonly address: IAddress;
  readonly business_registration_num: string;
}

export namespace IHSProvider {
  export type IPrivate = IHSProvider & IBusinessUser.IPrivateFragment;

  export type ISummary = Pick<
    IHSProvider,
    | "type"
    | "id"
    | "name"
    | "introduction"
    | "profile_image_url"
    | "review_stats"
    | "expertise"
    | "address"
  >;

  export interface IExampleImage {
    readonly id: string;
    readonly url: string;
  }

  export interface ICreate
    extends Omit<
      Mutable<IHSProvider>,
      | "expertise"
      | "id"
      | "created_at"
      | "updated_at"
      | "type"
      | "example_images"
    > {
    acceptant_agreement_ids: string[];
    sub_expertise_ids: string[];
    example_image_urls: string[];
  }

  export type ICreateRequest = Omit<ICreate, "email" | "phone"> &
    IBusinessUser.ICreateRequest<"home service provider">;

  export type IPaginatedResponse = IPaginated<ISummary>;
}
