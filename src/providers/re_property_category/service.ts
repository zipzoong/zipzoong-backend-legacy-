import { IREPropertyCategory } from "@DTO/category/re_property";
import { filter, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { isActive, throwIfNot, throwIfNull } from "@UTIL";
import { Exception } from "./exception";

export namespace Service {
  export namespace Super {
    export const getList = (): Promise<IREPropertyCategory.ISuper[]> =>
      pipe(
        0,

        async () =>
          prisma.rEPropertySuperCategoryModel.findMany({
            include: {
              middle_categories: { include: { sub_categories: true } }
            }
          }),

        filter(isActive),

        map((super_category) => ({
          level: "super" as const,
          id: super_category.id,
          name: super_category.name,
          middle_categories: pipe(
            super_category.middle_categories,

            filter(isActive),

            map((middle_category) => ({
              level: "middle" as const,
              id: middle_category.id,
              name: middle_category.name,
              sub_categories: pipe(
                middle_category.sub_categories,

                filter(isActive),

                map((sub_category) => ({
                  level: "sub" as const,
                  id: sub_category.id,
                  name: sub_category.name
                })),

                toArray
              )
            })),

            toArray
          )
        })),

        toArray
      );

    export const getOne = (
      super_category_id: string
    ): Promise<IREPropertyCategory.ISuper> =>
      pipe(
        super_category_id,

        async (id) =>
          prisma.rEPropertySuperCategoryModel.findFirst({
            where: { id },
            include: {
              middle_categories: { include: { sub_categories: true } }
            }
          }),

        throwIfNull(Exception.NotFound),

        throwIfNot(isActive, () => Exception.NotFound),

        (model) => ({
          level: "super",
          id: model.id,
          name: model.name,
          middle_categories: pipe(
            model.middle_categories,

            filter(isActive),

            map((middle_category) => ({
              level: "middle" as const,
              id: middle_category.id,
              name: middle_category.name,
              sub_categories: pipe(
                middle_category.sub_categories,

                filter(isActive),

                map((sub_category) => ({
                  level: "sub" as const,
                  id: sub_category.id,
                  name: sub_category.name
                })),

                toArray
              )
            })),

            toArray
          )
        })
      );
  }
  export namespace Middle {
    export const getOne = (
      middle_category_id: string
    ): Promise<IREPropertyCategory.IMiddle> =>
      pipe(
        middle_category_id,

        async (id) =>
          prisma.rEPropertyMiddleCategoryModel.findFirst({
            where: { id },
            include: { sub_categories: true, super_category: true }
          }),

        throwIfNull(Exception.NotFound),

        throwIfNot(isActive, () => Exception.NotFound),

        (middle_category) => ({
          level: "middle",
          id: middle_category.id,
          name: middle_category.name,
          super_category: {
            level: "super",
            id: middle_category.super_category.id,
            name: middle_category.super_category.name
          },
          sub_categories: pipe(
            middle_category.sub_categories,

            filter(isActive),

            map((sub_category) => ({
              level: "sub" as const,
              id: sub_category.id,
              name: sub_category.name
            })),

            toArray
          )
        })
      );
  }
}
