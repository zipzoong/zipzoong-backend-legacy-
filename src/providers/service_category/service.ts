import { IServiceCategory } from "@DTO/category/service";
import { filter, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { isActive, isInActive, isNull, toThrow } from "@UTIL";
import { Exception } from "./exception";

export namespace Service {
  export namespace Super {
    export const getList = ({
      type
    }: IServiceCategory.ISearch): Promise<IServiceCategory.ISuper[]> =>
      pipe(
        type,

        async (ins) =>
          prisma.serviceSuperCategoryModel.findMany({
            where: { type: { in: ins } },
            include: { sub_categories: true }
          }),

        filter(isActive),

        map(
          ({ id, name, type, sub_categories }) =>
            ({
              level: "super",
              id,
              name,
              type,
              sub_categories: sub_categories.filter(isActive).map((item) => ({
                level: "sub",
                id: item.id,
                name: item.name
              }))
            } satisfies IServiceCategory.ISuper)
        ),

        toArray
      );

    export const getOne = async (
      category_id: string
    ): Promise<IServiceCategory.ISuper> =>
      pipe(
        category_id,

        async (id) =>
          prisma.serviceSuperCategoryModel.findFirst({
            where: { id },
            include: { sub_categories: true }
          }),

        (model) =>
          isNull(model) || isInActive(model)
            ? toThrow(Exception.NotFound)
            : model,

        (model) => ({
          level: "super",
          id: model.id,
          name: model.name,
          type: model.type,
          sub_categories: model.sub_categories
            .filter(isActive)
            .map(({ id, name }) => ({ level: "sub", id, name }))
        })
      );
  }
}
