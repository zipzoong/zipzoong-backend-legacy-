import { IREAgent } from "@DTO/user/re_agent";
import { Prisma } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace Json {
  export const createData = (input: IREAgent.ICreate) => {
    const now = getISOString();
    return {
      base: {
        create: {
          base: {
            create: {
              id: randomUUID(),
              name: input.name,
              email: input.email,
              created_at: now,
              updated_at: now,
              is_deleted: false,
              deleted_at: null,
              agreement_acceptances: {
                createMany: {
                  data: input.acceptant_agreement_ids.map((agreement_id) => ({
                    id: randomUUID(),
                    agreement_id,
                    created_at: now,
                    updated_at: now,
                    is_deleted: false,
                    deleted_at: null
                  }))
                }
              }
            }
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
          }
        }
      },
      is_licensed: input.is_licensed,
      re_num: input.real_estate.num,
      re_name: input.real_estate.name,
      re_phone: input.real_estate.phone,
      re_licensed_agent_name: input.real_estate.licensed_agent_name
    } satisfies Prisma.REAgentModelCreateArgs["data"];
  };

  export const findInclude = () =>
    ({
      base: {
        include: {
          base: true,
          sub_expertises: {
            include: { sub_category: { include: { super_category: true } } }
          }
        }
      },
      properties: {
        include: findPropertyInclude()
      }
    } satisfies Prisma.REAgentModelInclude);

  export const findPrivateInclude = () =>
    ({
      base: {
        include: {
          base: {
            include: {
              agreement_acceptances: { include: { agreement: true } }
            }
          },
          sub_expertises: {
            include: { sub_category: { include: { super_category: true } } }
          },
          certification_images: true
        }
      },
      properties: {
        include: findPropertyInclude()
      }
    } satisfies Prisma.REAgentModelInclude);

  export const findPropertyInclude = () =>
    ({
      categories: {
        include: {
          sub_category: {
            include: {
              middle_category: { include: { super_category: true } }
            }
          }
        }
      }
    } satisfies Prisma.REProertyModelInclude);
}
