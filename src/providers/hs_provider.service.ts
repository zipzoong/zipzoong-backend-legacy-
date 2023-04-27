import { IPaginatedResponse } from "@DTO/common";
import { IHSProvider } from "@DTO/user";
import {
  BusinessUserModel,
  HSIntroductionImageModel,
  HSProviderModel,
  UserExpertiseModel,
  UserModel
} from "@PRISMA";
import { Mutable } from "@TYPE";
import { getISOString, isNull } from "@UTIL";
import typia from "typia";

export namespace HSProvider {
  export const create = (input: IHSProvider.ICreate): IHSProvider => {
    throw Error();
  };

  export const activate = (entity: Mutable<IHSProvider>): IHSProvider => {
    entity.is_deleted = false;
    entity.deleted_at = null;
    return entity;
  };

  export const inActivate = (entity: Mutable<IHSProvider>): IHSProvider => {
    if (entity.is_deleted) entity;
    entity.is_deleted = true;
    entity.deleted_at = getISOString();
    return entity;
  };

  export const map = (
    user: UserModel,
    business: BusinessUserModel,
    provider: HSProviderModel,
    images: HSIntroductionImageModel[],
    expertises: UserExpertiseModel[]
  ): IHSProvider | null => {
    const hs_provider: IHSProvider = {
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
      expertise_ids: expertises
        .filter((entity) => !entity.is_deleted)
        .map((entity) => entity.category_id)
    };
    return typia.equals<IHSProvider>(hs_provider) ? hs_provider : null;
  };
}

export namespace HSProviderService {
  export const create = (
    input: IHSProvider.ICreateRequest
  ): Promise<IPaginatedResponse<IHSProvider.IResponse>> => {
    throw Error();
  };
}
