import { IBusinessUser } from "@DTO/user/business";
import { User } from "./user.core";

export namespace Business {
  export const create = <T extends IBusinessUser.Type = IBusinessUser.Type>(
    input: IBusinessUser.ICreate<T>
  ): IBusinessUser.IUnVerified<T> => {
    const base = User.create(input);
    const {
      business_type,
      introduction_title = "",
      introduction_content = ""
    } = input;

    return {
      ...base,
      is_verified: false,
      business_type,
      introduction_title,
      introduction_content
    };
  };
}
