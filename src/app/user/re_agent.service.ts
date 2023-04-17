import { IRealEstateAgent } from "@DTO/user/business";
import { prisma } from "@INFRA/DB";
import { RealEstateAgent } from "./real_estate.core";
import { isNull } from "@UTIL";
import {
  NotFoundException,
  UnprocessableEntityException
} from "@nestjs/common";

export namespace RealEstateAgentService {
  export const create = async (
    body: IRealEstateAgent.ICreate
  ): Promise<IRealEstateAgent.IUnVerified> => {
    const agent = RealEstateAgent.create(body);

    await prisma.$transaction([
      prisma.userModel.create({
        data: {
          id: agent.id,
          name: agent.name,
          email: agent.email,
          email_verified: agent.email_verified,
          phone: agent.phone,
          phone_verified: agent.phone_verified,
          address_first: agent.address_first,
          address_second: agent.address_second,
          profile_image_url: agent.profile_image_url
        }
      }),
      prisma.businessUserModel.create({
        data: {
          id: agent.id,
          is_verified: agent.is_verified,
          introduction_title: agent.introduction_title,
          introduction_content: agent.introduction_content
        }
      })
      /**
      prisma.realEstateAgentModel.create({
        data: {
          id: agent.id,
          is_licensed: agent.is_licensed,
          real_estate_num: agent.real_estate_num,
          real_estate_name: agent.real_estate_name,
          real_estate_phone: agent.real_estate_phone,
          licensed_agent_name: agent.licensed_agent_name,
          specialized_field_id: agent.specialized_field_id
        }
      })
      */
    ]);

    return agent;
  };

  export const find = async (re_id: string): Promise<IRealEstateAgent> => {
    const [userModel, businessModel, agentModel] = await prisma.$transaction([
      prisma.userModel.findFirst({ where: { id: re_id } }),
      prisma.businessUserModel.findFirst({ where: { id: re_id } }),
      prisma.realEstateAgentModel.findFirst({ where: { id: re_id } })
    ]);

    if (isNull(userModel) || isNull(businessModel) || isNull(agentModel))
      throw new NotFoundException("Real Estate Agent Not Found");

    const agent = RealEstateAgent.map(userModel, businessModel, agentModel);

    if (isNull(agent))
      throw new UnprocessableEntityException("Unprocessable Entity");

    return agent;
  };
}
