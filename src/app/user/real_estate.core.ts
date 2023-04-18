import { IRealEstateAgent } from "@DTO/user/business";
import { Business } from "./business.core";
import {
  BusinessUserModel,
  RealEstateAgentModel,
  RealEstateSpecializedSubFieldModel,
  UserModel
} from "@PRISMA";
import typia from "typia";

export namespace RealEstateAgent {
  export const create = (
    input: IRealEstateAgent.ICreate,
    field?: IRealEstateAgent.ISpecializedField
  ): IRealEstateAgent.IUnVerified => {
    const base = Business.create(input);
    const {
      is_licensed,
      real_estate_name,
      real_estate_num,
      real_estate_phone,
      licensed_agent_name
    } = input;

    return {
      ...base,
      is_licensed,
      real_estate_name,
      real_estate_num,
      real_estate_phone,
      licensed_agent_name,
      specialized_field: field
    };
  };

  export const map = (
    models: readonly [
      UserModel,
      BusinessUserModel,
      RealEstateAgentModel,
      RealEstateSpecializedSubFieldModel | null
    ]
  ): IRealEstateAgent | null => {
    throw Error("");
    /**
    const union: IRealEstateAgent = {
      id: user.id,
      user_type: "business",
      name: user.name,
      email_verified: user.email_verified,

      phone_verified: user.phone_verified,

      is_licensed: agent.is_licensed,
      real_estate_num: agent.real_estate_num,
      real_estate_name: agent.real_estate_name,
      real_estate_phone: agent.real_estate_phone,
      licensed_agent_name: agent.licensed_agent_name,
      specialized_field_id: agent.specialized_field_id,
      business_type: "real estate",
      is_verified: business.is_verified,
      introduction_title: business.introduction_title,
      introduction_content: business.introduction_content
    };

    
      */
  };
}
