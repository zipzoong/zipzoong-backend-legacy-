import { IREProperty } from "@DTO/re_property";
import { prisma } from "@INFRA/DB";
import BusinessUser from "@PROVIDER/user/business_user";
import { getISOString, isActive } from "@UTIL";
import typia from "typia";
import { Json } from "./json";

export namespace Map {
  export const rEProperty = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEProertyModel.findFirst<{
            include: ReturnType<typeof Json.findInclude>;
          }>
        >
      >
    >
  ): IREProperty => {
    const property: IREProperty = {
      id: input.id,
      name: input.name,
      main_image_url: input.main_image_url,
      re_agent: {
        id: input.re_agent.id,
        name: input.re_agent.base.base.name,
        profile_image_url: input.re_agent.base.profile_image_url,
        expertise: BusinessUser.Map.expertise(
          input.re_agent.base.sub_expertises
        )
      },
      sub_categories: input.categories
        .filter(isActive)
        .map(({ sub_category }) => ({
          level: "sub",
          id: sub_category.id,
          name: sub_category.name,
          middle_category: {
            level: "middle",
            id: sub_category.middle_category.id,
            name: sub_category.middle_category.name,
            super_category: {
              level: "super",
              id: sub_category.middle_category.super_category.id,
              name: sub_category.middle_category.super_category.name
            }
          }
        })),
      created_at: getISOString(input.created_at),
      updated_at: getISOString(input.updated_at)
    };
    if (!typia.equals(property))
      throw Error(`RE-Property ${input.id} has invalid data`);

    return property;
  };
}
