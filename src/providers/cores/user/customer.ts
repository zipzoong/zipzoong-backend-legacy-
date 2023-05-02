import { IDateTime, ISoftDeletable } from "@DTO/common";
import { ICustomer } from "@DTO/user";
import { CustomerModel, UserModel } from "@PRISMA";
import { getISOString, isNull } from "@UTIL";
import { randomUUID } from "crypto";
import typia from "typia";

export namespace Customer {
  export const create = (
    input: ICustomer.ICreate
  ): ICustomer & IDateTime & ISoftDeletable => {
    const now = getISOString();
    const {
      name = "",
      email = null,
      phone = null,
      address = null,
      profile_image_url = null,
      birth = null,
      gender = null
    } = input;
    return {
      type: "customer",
      id: randomUUID(),
      name: name,
      email: email,
      phone: phone,
      address: address,
      profile_image_url: profile_image_url,
      birth: birth,
      gender: gender,
      is_deleted: false,
      created_at: now,
      updated_at: now,
      deleted_at: null
    };
  };

  export const map = ({
    userModel,
    customerModel
  }: {
    userModel: UserModel;
    customerModel: CustomerModel;
  }): ICustomer & IDateTime & ISoftDeletable => {
    const customer: ICustomer & IDateTime & ISoftDeletable = {
      type: "customer",
      id: userModel.id,
      name: userModel.name,
      email: userModel.email,
      is_deleted: userModel.is_deleted,
      created_at: getISOString(userModel.created_at),
      updated_at: getISOString(userModel.updated_at),
      deleted_at: isNull(userModel.deleted_at)
        ? null
        : getISOString(userModel.deleted_at),
      phone: customerModel.phone,
      birth: customerModel.birth,
      gender: customerModel.gender,
      profile_image_url: customerModel.profile_image_url,
      address: isNull(customerModel.address_first)
        ? null
        : {
            first: customerModel.address_first,
            second: customerModel.address_second
          }
    };

    if (!typia.equals(customer)) throw Error("Fail: Customer.map");
    return customer;
  };
}
