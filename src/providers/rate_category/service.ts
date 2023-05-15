import { IRateCategory } from "@DTO/rate_category";
import { filter, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { isActive } from "@UTIL";

export namespace Service {
  export const getList = ({
    business_type
  }: IRateCategory.ISearch): Promise<IRateCategory[]> =>
    pipe(
      business_type,

      async (ins) =>
        prisma.rateCategoryModel.findMany({
          where: { business_type: { in: ins } }
        }),

      filter(isActive),

      map((category) => ({
        id: category.id,
        name: category.name,
        business_type: category.business_type
      })),

      toArray
    );
}
