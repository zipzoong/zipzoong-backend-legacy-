import { UserModel, CustomerModel } from "@PRISMA";
import { ICustomer } from "@DTO/user";
import { User } from "../user.core";
import { getISOString, isNull, nullToUndefined } from "@UTIL";
import typia from "typia";

export namespace Customer {
  export const create = (input: ICustomer.ICreate): ICustomer => {
    const base = User.create(input);
    const { profile_image_url, gender, birth } = input;
    return {
      ...base,
      profile_image_url,
      gender,
      birth
    };
  };

  export const map = ([
    { id, name, phone, created_at, email, email_verified },
    { profile_image_url, gender, birth, address_first, address_second }
  ]: readonly [UserModel, CustomerModel]): ICustomer | null => {
    const customer: ICustomer = {
      user_type: "customer",
      id,
      name,
      phone,
      created_at: getISOString(created_at),
      profile_image_url: nullToUndefined(profile_image_url),
      gender: nullToUndefined(gender),
      birth: nullToUndefined(birth),
      email: isNull(email)
        ? undefined
        : { email: email, is_verified: email_verified },
      address: isNull(address_first)
        ? undefined
        : {
            first: address_first,
            second: address_second ?? undefined
          }
    };
    return typia.equals<ICustomer>(customer) ? customer : null;
  };
}
