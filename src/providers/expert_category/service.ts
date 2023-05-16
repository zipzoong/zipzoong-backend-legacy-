import { IExpertCategory } from "@DTO/expert_category";
import { filter, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { isActive, isInActive, isNull, throwIfNull, toThrow } from "@UTIL";
import { Exception } from "./exception";

export namespace Service {
  export namespace Super {
    export const getList = (
      input: IExpertCategory.ISuper.ISearch
    ): Promise<IExpertCategory.ISuper[]> =>
      pipe(
        input,

        async ({ filter }) =>
          prisma.expertSuperCategoryModel.findMany({
            where: { business_type: { in: filter } },
            include: { sub_categories: true }
          }),

        filter(isActive),

        map(
          ({ id, name, business_type, sub_categories }) =>
            ({
              type: "super",
              id,
              name,
              business_type,
              sub_categories: sub_categories.filter(isActive).map((item) => ({
                type: "sub",
                id: item.id,
                name: item.name
              }))
            } satisfies IExpertCategory.ISuper)
        ),

        toArray
      );

    export const getOne = async (
      category_id: string
    ): Promise<IExpertCategory.ISuper> =>
      pipe(
        category_id,

        async (id) =>
          prisma.expertSuperCategoryModel.findFirst({
            where: { id },
            include: { sub_categories: true }
          }),

        (model) =>
          isNull(model) || isInActive(model)
            ? toThrow(Exception.NotFound)
            : model,

        (model) => ({
          type: "super",
          id: model.id,
          name: model.name,
          business_type: model.business_type,
          sub_categories: model.sub_categories
            .filter(isActive)
            .map(({ id, name }) => ({ type: "sub", id, name }))
        })
      );
  }

  export namespace Sub {
    export const getList = (
      input: IExpertCategory.ISub.ISearch
    ): Promise<IExpertCategory.ISub[]> =>
      pipe(
        input,

        async (input) =>
          prisma.expertSubCategoryModel.findMany({
            where: {
              super_category: {
                business_type: { in: input.filter },
                name: input.super_category_name
              }
            },
            include: { super_category: true }
          }),

        filter(isActive),

        map(
          (sub_category) =>
            ({
              type: "sub",
              id: sub_category.id,
              name: sub_category.name,
              super_category: {
                type: "super",
                id: sub_category.super_category.id,
                name: sub_category.super_category.name,
                business_type: sub_category.super_category.business_type
              }
            } satisfies IExpertCategory.ISub)
        ),

        toArray
      );

    export const getOne = (
      category_id: string
    ): Promise<IExpertCategory.ISub> =>
      pipe(
        category_id,

        async (id) =>
          prisma.expertSubCategoryModel.findFirst({
            where: { id },
            include: { super_category: true }
          }),

        throwIfNull(Exception.NotFound),

        (model) => (isInActive(model) ? toThrow(Exception.NotFound) : model),

        (model) => ({
          type: "sub",
          id: model.id,
          name: model.name,
          super_category: {
            type: "super",
            id: model.super_category.id,
            name: model.super_category.name,
            business_type: model.super_category.business_type
          }
        })
      );
  }
}
