import { IDateTime, ISoftDeletable } from "@DTO/common";
import { IHSProvider } from "@DTO/user";
import {
  BusinessUserModel,
  HSIntroductionImageModel,
  HSProviderModel,
  SubExpertiseModel,
  SuperExpertiseModel,
  UserModel
} from "@PRISMA";
import { getISOString, isNull } from "@UTIL";
import { randomUUID } from "crypto";
import typia from "typia";

export namespace HSProvider {
  export const create = (
    input: IHSProvider.ICreate
  ): IHSProvider & IDateTime & ISoftDeletable => {
    const now = getISOString();
    const {
      name = "",
      email = null,
      phone,
      address,
      introduction,
      introduction_images,
      profile_image_url,
      business_registration_num,
      sub_expertise_ids,
      super_expertise_id
    } = input;
    return {
      type: "home service provider",
      id: randomUUID(),
      name,
      email,
      phone,
      address,
      introduction: {
        title: introduction.title,
        content: introduction.content,
        images: introduction_images.map((image_url) => ({
          id: randomUUID(),
          image_url,
          created_at: now,
          updated_at: now,
          is_deleted: false,
          deleted_at: null
        }))
      },
      super_expertise_id,
      sub_expertise_ids,
      profile_image_url,
      is_verified: false,
      business_registration_num,
      is_deleted: false,
      created_at: now,
      updated_at: now,
      deleted_at: null
    };
  };

  export const map = ({
    userModel,
    businessModel,
    providerModel,
    subExpertiseModels,
    superExpertiseModel,
    introductionImageModels
  }: {
    userModel: UserModel;
    businessModel: BusinessUserModel;
    providerModel: HSProviderModel;
    superExpertiseModel: SuperExpertiseModel;
    subExpertiseModels: SubExpertiseModel[];
    introductionImageModels: HSIntroductionImageModel[];
  }): IHSProvider & IDateTime & ISoftDeletable => {
    const provider: IHSProvider & IDateTime & ISoftDeletable = {
      type: "home service provider",
      id: userModel.id,
      name: userModel.name,
      email: userModel.email,
      created_at: getISOString(userModel.created_at),
      updated_at: getISOString(userModel.updated_at),
      is_deleted: userModel.is_deleted,
      deleted_at: isNull(userModel.deleted_at)
        ? null
        : getISOString(userModel.deleted_at),
      phone: businessModel.phone,
      profile_image_url: businessModel.profile_image_url,
      is_verified: businessModel.is_verified,
      address: {
        first: businessModel.address_first,
        second: businessModel.address_second
      },
      introduction: {
        title: businessModel.introduction_title,
        content: businessModel.introduction_content,
        images: introductionImageModels
          .filter((entity) => !entity.is_deleted)
          .map(({ id, image_url }) => ({ id, image_url }))
      },
      business_registration_num: providerModel.business_registration_num,
      super_expertise_id: superExpertiseModel.super_category_id,
      sub_expertise_ids: subExpertiseModels
        .filter((entity) => !entity.is_deleted)
        .map((entity) => entity.sub_category_id)
    } satisfies IHSProvider & IDateTime & ISoftDeletable;

    if (!typia.equals(provider)) throw Error("Fail to HSProvider.map");
    return provider;
  };
}
