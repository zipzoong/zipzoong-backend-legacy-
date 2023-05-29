import { IREProperty } from "@DTO/re_property";
import { flatMap, map, pipe, toArray } from "@fxts/core";
import { Prisma } from "@PRISMA";
import REAgent from "@PROVIDER/user/re_agent";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace Json {
  export const createData = (input: IREProperty.ICreate) => {
    const now = getISOString();
    return {
      id: randomUUID(),
      name: input.name,
      main_image_url: input.main_image_url,
      is_visible: true,
      re_agent: { connect: { id: input.re_agent_id } },
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
    } satisfies Prisma.REPropertyModelCreateInput;
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
            re_agent_id: data.re_agent.connect.id,
            is_visible: data.is_visible,
            created_at: data.created_at,
            updated_at: data.updated_at,
            is_deleted: data.is_deleted,
            deleted_at: data.deleted_at
          } satisfies Prisma.REPropertyModelCreateManyInput)
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

  export const findCategorySelect = () =>
    ({
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
    } satisfies Prisma.REPropertyCategoryModelSelect);

  export const findSummarySelect = () =>
    ({
      id: true,
      name: true,
      main_image_url: true,
      created_at: true,
      updated_at: true,
      is_visible: true,
      categories: { select: findCategorySelect() }
    } satisfies Prisma.REPropertyModelSelect);

  export const findPublicSelect = () =>
    ({
      id: true,
      name: true,
      main_image_url: true,
      created_at: true,
      updated_at: true,
      is_deleted: true,
      deleted_at: true,
      re_agent: {
        select: REAgent.Json.findSummarySelect()
      },
      categories: {
        select: findCategorySelect()
      }
    } satisfies Prisma.REPropertyModelSelect);

  export const findPrivateSelect = () =>
    ({
      id: true,
      name: true,
      main_image_url: true,
      created_at: true,
      updated_at: true,
      is_deleted: true,
      deleted_at: true,
      re_agent: {
        select: REAgent.Json.findSummarySelect()
      },
      categories: {
        select: findCategorySelect()
      },
      is_visible: true
    } satisfies Prisma.REPropertyModelSelect);
}
