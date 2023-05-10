import { IREProperty } from "@DTO/re_property";
import { flatMap, map, pipe, toArray } from "@fxts/core";
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
      agent: { connect: { id: input.agent_id } },
      categories: {
        createMany: {
          data: pipe(
            input.sub_category_ids,

            map((sub_category_id) => ({
              id: randomUUID(),
              sub_category_id,
              created_at: now,
              updated_at: now,
              is_deleted: false,
              deleted_at: null
            })),

            toArray
          )
        }
      },
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null
    } satisfies Prisma.REProertyModelCreateInput;
  };

  export const createManyData = (input: ReturnType<typeof createData>[]) => {
    const property_create_many_input = pipe(
      input,

      map(
        (data) =>
          ({
            id: data.id,
            name: data.name,
            main_image_url: data.main_image_url,
            agent_id: data.agent.connect.id,
            created_at: data.created_at,
            updated_at: data.updated_at,
            is_deleted: data.is_deleted,
            deleted_at: data.deleted_at
          } satisfies Prisma.REProertyModelCreateManyInput)
      ),

      toArray
    );
    const property_category_create_many_input = pipe(
      input,

      flatMap((data) =>
        data.categories.createMany.data.map(
          ({
            id,
            sub_category_id,
            created_at,
            updated_at,
            is_deleted,
            deleted_at
          }) =>
            ({
              id,
              sub_category_id,
              re_property_id: data.id,
              created_at,
              updated_at,
              is_deleted,
              deleted_at
            } satisfies Prisma.REPropertyCategoryModelCreateManyInput)
        )
      ),

      toArray
    );

    return {
      property_create_many_input,
      property_category_create_many_input
    };
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
