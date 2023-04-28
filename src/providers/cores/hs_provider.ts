import { IDateTime, ISoftDeletable } from "@DTO/common";
import { IHSProvider } from "@DTO/user";
import { InternalServerErrorException } from "@nestjs/common";
import {
  BusinessUserModel,
  HSIntroductionImageModel,
  HSProviderModel,
  SubExpertiseModel,
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

  export const map = (
    user: UserModel,
    business: BusinessUserModel,
    provider: HSProviderModel,
    images: HSIntroductionImageModel[],
    sub_expertises: SubExpertiseModel[]
  ): IHSProvider & IDateTime & ISoftDeletable => {
    const hs_provider = {
      type: "home service provider",
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: getISOString(user.created_at),
      updated_at: getISOString(user.updated_at),
      is_deleted: user.is_deleted,
      deleted_at: isNull(user.deleted_at)
        ? null
        : getISOString(user.deleted_at),
      phone: business.phone,
      profile_image_url: business.profile_image_url,
      is_verified: business.is_verified,
      address: {
        first: business.address_first,
        second: business.address_second
      },
      introduction: {
        title: business.introduction_title,
        content: business.introduction_content,
        images: images
          .filter((entity) => !entity.is_deleted)
          .map(({ id, image_url }) => ({ id, image_url }))
      },
      business_registration_num: provider.business_registration_num,
      super_expertise_id: business.super_expertise_id,
      sub_expertise_ids: sub_expertises
        .filter((entity) => !entity.is_deleted)
        .map((entity) => entity.sub_category_id)
    } satisfies IHSProvider & IDateTime & ISoftDeletable;

    if (!typia.equals<IHSProvider & IDateTime & ISoftDeletable>(hs_provider)) {
      throw new InternalServerErrorException();
    }
    return hs_provider;
  };
}
