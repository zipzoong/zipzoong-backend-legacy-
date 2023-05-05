import { IExpertCategory } from "@DTO/expert_category";
import { prisma } from "@INFRA/DB";
import { NotFoundException } from "@nestjs/common";
import { isNull } from "@UTIL";

export namespace ExpertCategory {
  const CategoryNotFound = new NotFoundException("Expert Category Not Found");

  export const getSuperCategoryList = async (
    input: IExpertCategory.ISuperSearch
  ): Promise<IExpertCategory.Super[]> => {
    const list = await prisma.expertSuperCategoryModel.findMany({
      where: { business_type: { in: input.filter } }
    });
    const sub_categories = await prisma.expertSubCategoryModel.findMany({
      where: { super_id: { in: list.map(({ id }) => id) } }
    });

    return list
      .filter((item) => !item.is_deleted)
      .map((category) => ({
        type: "super",
        id: category.id,
        name: category.name,
        business_type: category.business_type,
        sub_categories: sub_categories
          .filter((item) => !item.is_deleted)
          .filter((item) => item.super_id === category.id)
          .map((item) => ({
            type: "sub",
            id: item.id,
            name: item.name
          }))
      }));
  };

  /** @throw NotFound */
  const findSuperCategory = async (id: string) => {
    const model = await prisma.expertSuperCategoryModel.findFirst({
      where: { id }
    });
    if (isNull(model) || model.is_deleted) throw CategoryNotFound;
    return model;
  };

  export const getSuperCategory = async (
    category_id: string
  ): Promise<IExpertCategory.Super> => {
    const model = await findSuperCategory(category_id);

    const sub_categories = await prisma.expertSubCategoryModel.findMany({
      where: { super_id: model.id }
    });
    return {
      type: "super",
      id: model.id,
      name: model.name,
      business_type: model.business_type,
      sub_categories: sub_categories
        .filter((category) => !category.is_deleted)
        .map(({ id, name }) => ({ type: "sub", id, name }))
    };
  };

  export const getSubCategoryList = async (
    super_id: string
  ): Promise<IExpertCategory.Sub[]> => {
    const model = await findSuperCategory(super_id);
    const sub_categories = await prisma.expertSubCategoryModel.findMany({
      where: { super_id: model.id }
    });

    return sub_categories.map((item) => ({
      type: "sub",
      id: item.id,
      name: item.name
    }));
  };
}
