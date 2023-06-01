import { IREAgent } from "@DTO/user/re_agent";
import { Prisma } from "@PRISMA";
import REProperty from "@PROVIDER/re_property";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";
import BusinessUser from "../business_user";
import User from "../user";

export namespace Json {
  export const createData = (input: IREAgent.ICreate) => {
    const now = getISOString();
    return {
      base: {
        create: {
          base: {
            create: User.Json.createData(input)
          },
          is_verified: false as boolean,
          introduction_title: input.introduction.title,
          introduction_content: input.introduction.content,
          phone: input.phone,
          address_first: input.real_estate.address.first,
          address_second: input.real_estate.address.second,
          profile_image_url: input.profile_image_url,
          sub_expertises: {
            createMany: {
              data: input.sub_expertise_ids.map((sub_category_id) => ({
                id: randomUUID(),
                sub_category_id,
                created_at: now,
                updated_at: now,
                is_deleted: false,
                deleted_at: null
              }))
            }
          },
          certification_images: {
            createMany: {
              data: input.business_certification_image_urls.map((url) => ({
                id: randomUUID(),
                url,
                created_at: now,
                updated_at: now,
                is_deleted: false,
                deleted_at: null
              }))
            }
          }
        }
      },
      is_licensed: input.is_licensed,
      re_num: input.real_estate.num,
      re_name: input.real_estate.name,
      re_phone: input.real_estate.phone,
      re_licensed_agent_name: input.real_estate.licensed_agent_name
    } satisfies Prisma.REAgentModelCreateInput;
  };

  export const findSummarySelect = () =>
    ({
      id: true,
      is_licensed: true,
      base: {
        select: BusinessUser.Json.findSummarySelect()
      }
    } satisfies Prisma.REAgentModelSelect);

  export const findPublicSelect = () =>
    ({
      id: true,
      is_licensed: true,
      re_num: true,
      re_name: true,
      re_phone: true,
      re_licensed_agent_name: true,
      properties: {
        where: { is_deleted: false, is_visible: true },
        select: REProperty.Json.findSummarySelect(),
        take: 10
      },
      base: {
        select: BusinessUser.Json.findPublicSelect()
      }
    } satisfies Prisma.REAgentModelSelect);

  export const findPrivateSelect = () =>
    ({
      id: true,
      is_licensed: true,
      re_num: true,
      re_name: true,
      re_phone: true,
      re_licensed_agent_name: true,
      properties: {
        where: { is_deleted: false },
        select: REProperty.Json.findSummarySelect(),
        take: 10
      },
      base: {
        select: BusinessUser.Json.findPrivateSelect()
      }
    } satisfies Prisma.REAgentModelSelect);
}
