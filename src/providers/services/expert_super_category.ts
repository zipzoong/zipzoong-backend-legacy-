import { IExpertCategory } from "@DTO/expert_category";
import { prisma } from "@INFRA/DB";
import { NotFoundException } from "@nestjs/common";
import { isActive, isNull } from "@UTIL";

export namespace ExpertSuperCategory {
  const CategoryNotFound = new NotFoundException("Expert Category Not Found");

  export const getList = async (
    input: IExpertCategory.ISuperSearch
  ): Promise<IExpertCategory.Super[]> => {
    const list = await prisma.expertSuperCategoryModel.findMany({
      where: { business_type: { in: input.filter } },
      include: { sub_categories: true }
    });

    return list.filter(isActive).map((category) => ({
      type: "super",
      id: category.id,
      name: category.name,
      business_type: category.business_type,
      sub_categories: category.sub_categories.filter(isActive).map((item) => ({
        type: "sub",
        id: item.id,
        name: item.name
      }))
    }));
  };

  /** @throw NotFound */
  const findOne = async (id: string) => {
    const model = await prisma.expertSuperCategoryModel.findFirst({
      where: { id }
    });
    if (isNull(model) || model.is_deleted) throw CategoryNotFound;
    return model;
  };

  export const getOne = async (
    category_id: string
  ): Promise<IExpertCategory.Super> => {
    const model = await findOne(category_id);

    const sub_categories = await prisma.expertSubCategoryModel.findMany({
      where: { super_category_id: model.id }
    });
    return {
      type: "super",
      id: model.id,
      name: model.name,
      business_type: model.business_type,
      sub_categories: sub_categories
        .filter(isActive)
        .map(({ id, name }) => ({ type: "sub", id, name }))
    };
  };

  export namespace SubCategory {
    export const getList = async (
      super_id: string
    ): Promise<IExpertCategory.Sub[]> => {
      const model = await findOne(super_id);
      const sub_categories = await prisma.expertSubCategoryModel.findMany({
        where: { super_category_id: model.id }
      });

      return sub_categories.filter(isActive).map((item) => ({
        type: "sub",
        id: item.id,
        name: item.name
      }));
    };
  }
}
