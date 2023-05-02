import { IDateTime, ISoftDeletable } from "@DTO/common";
import { IREAgent } from "@DTO/user";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace REAgent {
  export const create = (
    input: IREAgent.ICreate
  ): IREAgent & IDateTime & ISoftDeletable => {
    const now = getISOString();
    const {
      name = "",
      email = null,
      profile_image_url,
      super_expertise_id,
      sub_expertise_ids,
      phone,
      introduction,
      is_licensed,
      real_estate
    } = input;
    return {
      type: "real estate agent",
      id: randomUUID(),
      name,
      email,
      phone,
      introduction,
      super_expertise_id,
      sub_expertise_ids,
      profile_image_url,
      is_verified: false,
      real_estate,
      is_licensed,
      is_deleted: false,
      created_at: now,
      updated_at: now,
      deleted_at: null
    };
  };
}
