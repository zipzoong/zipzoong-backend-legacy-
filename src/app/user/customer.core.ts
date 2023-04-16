import { ICustomer } from "@DTO/user";
import { CustomerModel, UserModel } from "@PRISMA";
import typia from "typia";
import { User } from "./user.core";

export namespace Customer {
  export const create = (input: ICustomer.ICreate): ICustomer => {
    const base = User.create(input);
    return {
      birth: input.birth ?? null,
      gender: input.gender ?? null,
      user_type: base.user_type,
      id: base.id,
      name: base.name,
      email: base.email,
      email_verified: base.email_verified,
      phone: base.phone,
      phone_verified: base.phone_verified,
      address_first: base.address_first,
      address_second: base.address_second,
      profile_image: base.profile_image
    };
  };

  /**
   * 만약 customer object를 생성할 수 없으면 null을 반환한다.
   */
  export const map = (
    user: UserModel,
    customer: CustomerModel
  ): ICustomer | null => {
    const union: Record<keyof ICustomer, unknown> = {
      birth: customer.birth ?? null,
      gender: customer.gender ?? null,
      user_type: "customer",
      id: user.id,
      name: user.name,
      email: user.email,
      email_verified: user.email_verified,
      phone: user.phone,
      phone_verified: user.phone_verified,
      address_first: user.address_first,
      address_second: user.address_second,
      profile_image: user.profile_image
    };
    return typia.is<ICustomer>(union) ? union : null;
  };
}
