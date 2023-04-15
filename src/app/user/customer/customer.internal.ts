import { ICustomer, IUser } from "@DTO/user";
import { Customer, User } from "@PRISMA";
import { randomUUID } from "crypto";
import typia from "typia";

export namespace CustomerInternal {
  export const createUser = (input: IUser.ICreate): IUser.IBase => {
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
      user_type,
      id: randomUUID(),
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

  export const createCustomer = (input: ICustomer.ICreate): ICustomer => {
    const user = createUser(input);
    return {
      ...user,
      user_type: "customer",
      birth: input.birth ?? null,
      gender: input.gender ?? null
    };
  };

  /**
   * 만약 customer object를 생성할 수 없으면 null을 반환한다.
   */
  export const toCustomer = (
    user: User,
    customer: Customer
  ): ICustomer | null => {
    const union = {
      ...user,
      ...customer,
      user_type: "customer"
    };
    return typia.is<ICustomer>(union) ? union : null;
  };
}
