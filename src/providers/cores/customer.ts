import { IDateTime, ISoftDeletable } from "@DTO/common";
import { ICustomer } from "@DTO/user";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

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
}
