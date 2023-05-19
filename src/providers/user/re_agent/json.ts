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
    } satisfies Prisma.REAgentModelCreateInput;
  };
  export const findSelect = () =>
    ({
      id: true,
      is_licensed: true,
      re_num: true,
      re_name: true,
      re_phone: true,
      re_licensed_agent_name: true,
      properties: {
        where: { is_deleted: false },
        select: findPropertySelect(),
        take: 10
      },
      base: {
        select: {
          is_verified: true,
          phone: true,
          profile_image_url: true,
          introduction_title: true,
          introduction_content: true,
          address_first: true,
          address_second: true,
          review_stats: true,
          sub_expertises: {
            select: {
              is_deleted: true,
              sub_category: {
                select: { id: true, name: true, super_category: true }
              }
            }
          },
          base: {
            select: {
              created_at: true,
              updated_at: true,
              is_deleted: true,
              deleted_at: true,
              name: true,
              email: true
            }
          }
        }
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
        select: findPropertySelect(),
        take: 10
      },
      base: {
        select: {
          phone: true,
          is_verified: true,
          address_first: true,
          address_second: true,
          profile_image_url: true,
          introduction_title: true,
          introduction_content: true,
          review_stats: true,
          certification_images: true,
          sub_expertises: {
            select: {
              is_deleted: true,
              sub_category: {
                select: { id: true, name: true, super_category: true }
              }
            }
          },
          base: {
            select: {
              created_at: true,
              updated_at: true,
              is_deleted: true,
              deleted_at: true,
              name: true,
              email: true,
              agreement_acceptances: {
                select: {
                  created_at: true,
                  updated_at: true,
                  is_deleted: true,
                  deleted_at: true,
                  agreement: true
                }
              }
            }
          }
        }
      }
    } satisfies Prisma.REAgentModelSelect);

  export const findSummarySelect = () =>
    ({
      id: true,
      is_licensed: true,
      base: {
        select: {
          profile_image_url: true,
          introduction_title: true,
          introduction_content: true,
          review_stats: true,
          sub_expertises: {
            select: {
              is_deleted: true,
              sub_category: {
                select: { id: true, name: true, super_category: true }
              }
            }
          },
          base: {
            select: {
              is_deleted: true,
              deleted_at: true,
              name: true
            }
          }
        }
      }
    } satisfies Prisma.REAgentModelSelect);

  export const findPropertySelect = () =>
    ({
      id: true,
      name: true,
      main_image_url: true,
      created_at: true,
      updated_at: true,
      is_deleted: true,
      deleted_at: true,
      re_agent_id: true,
      categories: {
        select: {
          is_deleted: true,
          deleted_at: true,
          sub_category: {
            select: {
              id: true,
              name: true,
              middle_category: {
                select: {
                  id: true,
                  name: true,
                  super_category: {
                    select: {
                      id: true,
                      name: true
                    }
                  }
                }
              }
            }
          }
        }
      }
    } satisfies Prisma.REPropertyModelSelect);
}
