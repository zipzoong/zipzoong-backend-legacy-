import { IRateCategory } from "@DTO/category/rate";
import { filter, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { isActive } from "@UTIL";

export namespace Service {
  export const getList = ({
    target_type
  }: IRateCategory.ISearch): Promise<IRateCategory[]> =>
    pipe(
      target_type,

      async (ins) =>
        prisma.rateCategoryModel.findMany({
          where: { target_type: { in: ins } }
        }),

      filter(isActive),

      map((category) => ({
        id: category.id,
        name: category.name,
        target_type: category.target_type
      })),

      toArray
    );
}
