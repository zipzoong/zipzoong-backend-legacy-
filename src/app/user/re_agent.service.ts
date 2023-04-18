import { IRealEstateAgent } from "@DTO/user/business";
import { prisma } from "@INFRA/DB";
import { RealEstateAgent } from "./real_estate.core";
import { isNull, throwIfNull, toThrow } from "@UTIL";
import {
  NotFoundException,
  UnprocessableEntityException
} from "@nestjs/common";
import { pipe, tap } from "@fxts/core";

export namespace RealEstateAgentService {
  export const create = (
    input: IRealEstateAgent.ICreate
  ): Promise<IRealEstateAgent.IUnVerified> =>
    pipe(
      input,

      RealEstateAgent.create,

      tap(async (agent) => {
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
          }),
          prisma.realEstateAgentModel.create({
            data: {
              id: agent.id,
              is_licensed: agent.is_licensed,
              real_estate_num: agent.real_estate_num,
              real_estate_name: agent.real_estate_name,
              real_estate_phone: agent.real_estate_phone,
              licensed_agent_name: agent.licensed_agent_name,
              specialized_field_id: agent.specialized_field?.id ?? null
            }
          })
        ]);
      })
    );

  export const find = (agent_id: string): Promise<IRealEstateAgent> =>
    pipe(
      agent_id,

      (id) =>
        prisma.$transaction(async (tx) => {
          const [agent, business, user] = await Promise.all([
            tx.realEstateAgentModel.findFirst({ where: { id } }),
            tx.businessUserModel.findFirst({ where: { id } }),
            tx.userModel.findFirst({ where: { id } })
          ]);
          const specialized_field = agent?.specialized_field_id
            ? await tx.realEstateSpecializedSubFieldModel.findFirst({
                where: { id: agent.specialized_field_id }
              })
            : null;

          return [user, business, agent, specialized_field] as const;
        }),

      ([user, business, agent, field]) =>
        isNull(user) || isNull(business) || isNull(agent)
          ? toThrow(new NotFoundException("Real Estate Agent Not Found"))
          : ([user, business, agent, field] as const),

      RealEstateAgent.map,

      throwIfNull(new UnprocessableEntityException("Unprocessable Entity"))
    );
}
