import { IPaginatedResponse } from "@DTO/common";
import { IREPropertyCategory } from "@DTO/re_property_category";
import { filter, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { isActive, isInActive, throwIf, throwIfNull } from "@UTIL";
import { Exception } from "./exception";

export namespace Service {
  export namespace Super {
    export const getList = ({
      page = 1
    }: IREPropertyCategory.ISuper.ISearch): Promise<
      IPaginatedResponse<IREPropertyCategory.ISuper>
    > =>
      pipe(
        30,

        async (take) =>
          prisma.rEPropertySuperCategoryModel.findMany({
            where: { is_deleted: false },
            take,
            skip: (page - 1) * take,
            include: {
              middle_categories: { include: { sub_categories: true } }
            }
          }),

        map((super_category) => ({
          type: "super" as const,
          id: super_category.id,
          name: super_category.name,
          middle_categories: pipe(
            super_category.middle_categories,

            filter(isActive),

            map((middle_category) => ({
              type: "middle" as const,
              id: middle_category.id,
              name: middle_category.name,
              sub_categories: pipe(
                middle_category.sub_categories,

                filter(isActive),

                map((sub_category) => ({
                  type: "sub" as const,
                  id: sub_category.id,
                  name: sub_category.name
                })),

                toArray
              )
            })),

            toArray
          )
        })),

        toArray,

        (data) => ({ data, page })
      );

    export const getOne = (
      category_id: string
    ): Promise<IREPropertyCategory.ISuper> =>
      pipe(
        category_id,

        async (id) =>
          prisma.rEPropertySuperCategoryModel.findFirst({
            where: { id },
            include: {
              middle_categories: { include: { sub_categories: true } }
            }
          }),

        throwIfNull(Exception.NotFound),

        throwIf(isInActive, Exception.NotFound),

        (model) => ({
          type: "super",
          id: model.id,
          name: model.name,
          middle_categories: pipe(
            model.middle_categories,

            filter(isActive),

            map((middle_category) => ({
              type: "middle" as const,
              id: middle_category.id,
              name: middle_category.name,
              sub_categories: pipe(
                middle_category.sub_categories,

                filter(isActive),

                map((sub_category) => ({
                  type: "sub" as const,
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
    export const getList = ({
      page = 1,
      super_category_name
    }: IREPropertyCategory.IMiddle.ISearch): Promise<
      IPaginatedResponse<IREPropertyCategory.IMiddle>
    > =>
      pipe(
        30,

        async (take) =>
          prisma.rEPropertyMiddleCategoryModel.findMany({
            where: {
              is_deleted: false,
              super_category: { name: super_category_name }
            },
            include: {
              sub_categories: true,
              super_category: true
            },
            take,
            skip: (page - 1) * take
          }),

        map((middle_category) => ({
          type: "middle" as const,
          id: middle_category.id,
          name: middle_category.name,
          super_category: {
            type: "super" as const,
            id: middle_category.super_category.id,
            name: middle_category.super_category.name
          },
          sub_categories: pipe(
            middle_category.sub_categories,

            filter(isActive),

            map((sub_category) => ({
              type: "sub" as const,
              id: sub_category.id,
              name: sub_category.name
            })),

            toArray
          )
        })),

        toArray,

        (data) => ({ data, page })
      );
    export const getOne = (
      category_id: string
    ): Promise<IREPropertyCategory.IMiddle> =>
      pipe(
        category_id,

        async (id) =>
          prisma.rEPropertyMiddleCategoryModel.findFirst({
            where: { id },
            include: { sub_categories: true, super_category: true }
          }),

        throwIfNull(Exception.NotFound),

        throwIf(isInActive, Exception.NotFound),

        (middle_category) => ({
          type: "middle",
          id: middle_category.id,
          name: middle_category.name,
          super_category: {
            type: "super",
            id: middle_category.super_category.id,
            name: middle_category.super_category.name
          },
          sub_categories: pipe(
            middle_category.sub_categories,

            filter(isActive),

            map((sub_category) => ({
              type: "sub" as const,
              id: sub_category.id,
              name: sub_category.name
            })),

            toArray
          )
        })
      );
  }
  export namespace Sub {
    export const getList = ({
      page = 1,
      super_category_name,
      middle_category_name
    }: IREPropertyCategory.ISub.ISearch): Promise<
      IPaginatedResponse<IREPropertyCategory.ISub>
    > =>
      pipe(
        30,

        async (take) =>
          prisma.rEPropertySubCategoryModel.findMany({
            where: {
              is_deleted: false,
              middle_category: {
                name: middle_category_name,
                super_category: { name: super_category_name }
              }
            },
            include: {
              middle_category: { include: { super_category: true } }
            },

            take,
            skip: (page - 1) * take
          }),

        map((sub_category) => ({
          type: "sub" as const,
          id: sub_category.id,
          name: sub_category.name,
          middle_category: {
            type: "middle" as const,
            id: sub_category.middle_category.id,
            name: sub_category.middle_category.name,
            super_category: {
              type: "super" as const,
              id: sub_category.middle_category.super_category.id,
              name: sub_category.middle_category.super_category.name
            }
          }
        })),

        toArray,

        (data) => ({ data, page })
      );
    export const getOne = (
      category_id: string
    ): Promise<IREPropertyCategory.ISub> =>
      pipe(
        category_id,

        async (id) =>
          prisma.rEPropertySubCategoryModel.findFirst({
            where: { id },
            include: { middle_category: { include: { super_category: true } } }
          }),

        throwIfNull(Exception.NotFound),

        throwIf(isInActive, Exception.NotFound),

        (sub_category) => ({
          type: "sub",
          id: sub_category.id,
          name: sub_category.name,
          middle_category: {
            type: "middle",
            id: sub_category.middle_category.id,
            name: sub_category.middle_category.name,
            super_category: {
              type: "super",
              id: sub_category.middle_category.super_category.id,
              name: sub_category.middle_category.super_category.name
            }
          }
        })
      );
  }
}
