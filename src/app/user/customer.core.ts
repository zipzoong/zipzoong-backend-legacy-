import { ICustomer } from "@DTO/user";
import { CustomerModel, UserModel } from "@PRISMA";
import typia from "typia";
import { User } from "./user.core";
import { isNull } from "@UTIL";

export namespace Customer {
  export const create = (input: ICustomer.ICreate): ICustomer => {
    const base = User.create(input);
    return {
      ...base,
      ...(input.birth ? { birth: input.birth } : {}),
      ...(input.gender ? { gender: input.gender } : {})
    };
  };

  /**
   * 만약 customer object를 생성할 수 없으면 null을 반환한다.
   */
  export const map = (
    {
      id,
      name,
      email,
      phone,
      email_verified,
      phone_verified,
      profile_image_url,
      address_first,
      address_second
    }: UserModel,
    { birth, gender }: CustomerModel
  ): ICustomer | null => {
    const customer: ICustomer = {
      user_type: "customer",
      id,
      name,
      email_verified,
      phone_verified,
      ...(isNull(email) ? {} : { email }),
      ...(isNull(phone) ? {} : { phone }),
      ...(isNull(address_first) ? {} : { address_first }),
      ...(isNull(address_second) ? {} : { address_second }),
      ...(isNull(profile_image_url) ? {} : { profile_image_url }),
      ...(isNull(birth) ? {} : { birth }),
      ...(isNull(gender) || !typia.is<ICustomer.Gender>(gender)
        ? {}
        : { gender })
    };

    return typia.is(customer) ? customer : null;
  };
}
