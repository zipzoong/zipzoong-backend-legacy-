import { IREProperty } from "@DTO/re_property";
import { Prisma } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace Json {
  export const createData = (input: IREProperty.ICreate) => {
    const now = getISOString();
    return {
      id: randomUUID(),
      name: input.name,
      main_image_url: input.main_image_url,
      agent_id: input.agent_id,
      categories: {
        createMany: {
          data: input.sub_category_ids.map((sub_category_id) => ({
            id: randomUUID(),
            sub_category_id,
            created_at: now,
            updated_at: now,
            is_deleted: false,
            deleted_at: null
          }))
        }
      },
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null
    } satisfies Prisma.REProertyModelCreateArgs["data"];
  };

  export const findInclude = () =>
    ({
      agent: {
        include: {
          base: {
            include: {
              base: true,
              sub_expertises: {
                include: {
                  sub_category: { include: { super_category: true } }
                }
              }
            }
          }
        }
      },
      categories: {
        include: {
          sub_category: {
            include: {
              middle_category: {
                include: {
                  super_category: true
                }
              }
            }
          }
        }
      }
    } satisfies Prisma.REProertyModelInclude);
}
