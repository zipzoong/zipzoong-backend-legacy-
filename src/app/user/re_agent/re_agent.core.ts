import { UserModel, BusinessUserModel, REAgentModel } from "@PRISMA";
import { IREAgent } from "@DTO/user";
import { User } from "../user.core";
import { getISOString, isNull } from "@UTIL";
import typia from "typia";

export namespace REAgent {
  export const create = (input: IREAgent.ICreate): IREAgent => {
    const base = User.create(input);
    const {
      business_type,
      profile_image_url,
      introduction,
      is_licensed,
      real_estate
    } = input;

    return {
      ...base,
      business_type,
      profile_image_url,
      introduction,
      is_licensed,
      real_estate
    };
  };

  export const map = ([
    { id, name, phone, created_at, email, email_verified },
    { profile_image_url, introduction_title, introduction_content },
    {
      is_licensed,
      re_licensed_agent_name,
      re_num,
      re_name,
      re_phone,
      re_address_first,
      re_address_second
    }
  ]: readonly [
    UserModel,
    BusinessUserModel,
    REAgentModel
  ]): IREAgent | null => {
    const agent: IREAgent = {
      user_type: "business",
      business_type: "real estate",
      id,
      name,
      phone,
      email: isNull(email) ? undefined : { email, is_verified: email_verified },
      created_at: getISOString(created_at),
      profile_image_url,
      introduction: {
        title: introduction_title,
        content: introduction_content
      },
      is_licensed,
      real_estate: {
        num: re_num,
        name: re_name,
        phone: re_phone,
        address: {
          first: re_address_first,
          second: re_address_second ?? undefined
        },
        licensed_agent_name: re_licensed_agent_name
      }
    };
    return typia.equals<IREAgent>(agent) ? agent : null;
  };
}
