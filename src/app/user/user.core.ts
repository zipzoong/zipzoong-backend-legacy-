import { randomUUID } from "crypto";
import { IUser } from "@DTO/user";
import { isUndefined } from "@UTIL";

export namespace User {
  export const create = <T extends IUser.Type = IUser.Type>(
    input: IUser.ICreate<T>
  ): IUser.IBase<T> => {
    const {
      user_type,
      name,
      email,
      email_verified,
      phone,
      phone_verified,
      address_first,
      address_second,
      profile_image_url
    } = input;

    return {
      id: randomUUID(),
      user_type,
      name: name ?? "",
      phone,
      email,
      address_first,
      profile_image_url,
      email_verified:
        isUndefined(email) || isUndefined(email_verified)
          ? false
          : email_verified,
      phone_verified:
        isUndefined(phone) || isUndefined(phone_verified)
          ? false
          : phone_verified,
      ...(isUndefined(address_second) || isUndefined(address_first)
        ? {}
        : { address_second })
    };
  };
}
