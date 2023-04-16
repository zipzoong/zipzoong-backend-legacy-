import { randomUUID } from "crypto";
import { IUser } from "@DTO/user";

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
      profile_image
    } = input;

    return {
      id: randomUUID(),
      user_type,
      name: name ?? "",
      email: email ?? null,
      // email is nullish or email_verified is nullish
      email_verified:
        email == null || email_verified == null ? false : email_verified,
      phone: phone ?? null,
      // phone is nullish or phone_verified is nullish
      phone_verified:
        phone == null || phone_verified == null ? false : phone_verified,
      address_first: address_first ?? null,
      address_second:
        address_first == null || address_second == null ? null : address_second,
      profile_image: profile_image ?? null
    };
  };
}
