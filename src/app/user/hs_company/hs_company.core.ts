import {
  UserModel,
  BusinessUserModel,
  HSCompanyModel,
  HSCompanyIntroductionImageModel
} from "@PRISMA";
import { IHSCompany } from "@DTO/user";
import { User } from "../user.core";
import { getISOString, isNull } from "@UTIL";
import typia from "typia";

export namespace HSCompany {
  export const create = (input: IHSCompany.ICreate): IHSCompany => {
    const base = User.create(input);
    const {
      business_type,
      business_num,
      address,
      profile_image_url,
      introduction
    } = input;

    return {
      ...base,
      business_type,
      profile_image_url,
      business_num,
      address,
      introduction: { ...introduction, images: [] }
    } satisfies IHSCompany;
  };

  export const map = ([
    { id, name, phone, email, email_verified, created_at },
    { profile_image_url, introduction_title, introduction_content },
    { business_num, address_first, address_second },
    images
  ]: readonly [
    UserModel,
    BusinessUserModel,
    HSCompanyModel,
    HSCompanyIntroductionImageModel[]
  ]): IHSCompany | null => {
    const company: IHSCompany = {
      user_type: "business",
      business_type: "home service",
      id,
      name,
      phone,
      email: isNull(email) ? undefined : { email, is_verified: email_verified },
      created_at: getISOString(created_at),
      profile_image_url,
      introduction: {
        title: introduction_title,
        content: introduction_content,
        images: images.map(({ id, url }) => ({ id, url }))
      },
      business_num,
      address: {
        first: address_first,
        second: address_second ?? undefined
      }
    };

    return typia.equals<IHSCompany>(company) ? company : null;
  };
}
