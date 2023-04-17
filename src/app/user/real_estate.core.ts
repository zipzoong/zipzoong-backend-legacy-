import { IRealEstateAgent } from "@DTO/user/business";
import { Business } from "./business.core";
import { BusinessUserModel, RealEstateAgentModel, UserModel } from "@PRISMA";
import typia from "typia";

export namespace RealEstateAgent {
  export const create = (
    input: IRealEstateAgent.ICreate
  ): IRealEstateAgent.IUnVerified => {
    const base = Business.create(input);
    const {
      is_licensed,
      real_estate_name,
      real_estate_num,
      real_estate_phone,
      licensed_agent_name,
      specialized_field_id
    } = input;

    return {
      user_type: base.user_type,
      business_type: base.business_type,
      id: base.id,
      name: base.name,
      email: base.email,
      email_verified: base.email_verified,
      phone: base.phone,
      phone_verified: base.phone_verified,
      address_first: base.address_first,
      address_second: base.address_second,
      profile_image_url: base.profile_image_url,
      is_verified: base.is_verified,
      introduction_title: base.introduction_title,
      introduction_content: base.introduction_content,
      is_licensed: is_licensed ?? null,
      real_estate_name: real_estate_name ?? null,
      real_estate_num: real_estate_num ?? null,
      real_estate_phone: real_estate_phone ?? null,
      licensed_agent_name: licensed_agent_name ?? null,
      specialized_field_id: specialized_field_id ?? null
    };
  };

  export const map = (
    user: UserModel,
    business: BusinessUserModel,
    agent: RealEstateAgentModel
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
