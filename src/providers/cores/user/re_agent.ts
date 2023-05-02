import { IDateTime, ISoftDeletable } from "@DTO/common";
import { IREAgent } from "@DTO/user";
import {
  BusinessUserModel,
  REAgentModel,
  SubExpertiseModel,
  SuperExpertiseModel,
  UserModel
} from "@PRISMA";
import { getISOString, isNull } from "@UTIL";
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

  export const map = ({
    userModel,
    businessModel,
    agentModel,
    superExpertiseModel,
    subExpertiseModels
  }: {
    userModel: UserModel;
    businessModel: BusinessUserModel;
    agentModel: REAgentModel;
    superExpertiseModel: SuperExpertiseModel;
    subExpertiseModels: SubExpertiseModel[];
  }): IREAgent & IDateTime & ISoftDeletable => {
    return {
      type: "real estate agent",
      id: userModel.id,
      name: userModel.name,
      email: userModel.email,
      is_deleted: userModel.is_deleted,
      created_at: getISOString(userModel.created_at),
      updated_at: getISOString(userModel.updated_at),
      deleted_at: isNull(userModel.deleted_at)
        ? null
        : getISOString(userModel.deleted_at),

      phone: businessModel.phone,
      introduction: {
        title: businessModel.introduction_title,
        content: businessModel.introduction_content
      },
      is_verified: businessModel.is_verified,
      profile_image_url: businessModel.profile_image_url,

      is_licensed: agentModel.is_licensed,
      real_estate: {
        num: agentModel.re_num,
        name: agentModel.re_name,
        phone: agentModel.re_phone,
        licensed_agent_name: agentModel.re_licensed_agent_name,
        address: {
          first: businessModel.address_first,
          second: businessModel.address_second
        }
      },
      super_expertise_id: superExpertiseModel.super_category_id,
      sub_expertise_ids: subExpertiseModels.map(
        ({ sub_category_id }) => sub_category_id
      )
    };
  };
}
