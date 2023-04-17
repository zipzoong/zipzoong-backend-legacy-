import { IBusinessUser } from "@DTO/user/business";
import { User } from "./user.core";

export namespace Business {
  export const create = <T extends IBusinessUser.Type = IBusinessUser.Type>(
    input: IBusinessUser.ICreate<T>
  ): IBusinessUser.IUnVerifiedBase<T> => {
    const base = User.create(input);
    const { business_type, introduction_title, introduction_content } = input;

    return {
      id: base.id,
      user_type: base.user_type,
      name: base.name,
      email: base.email,
      email_verified: base.email_verified,
      phone: base.phone,
      phone_verified: base.phone_verified,
      address_first: base.address_first,
      address_second: base.address_second,
      profile_image_url: base.profile_image_url,
      business_type: business_type,
      introduction_title: introduction_title ?? "",
      introduction_content: introduction_content ?? "",
      is_verified: false
    };
  };
}
