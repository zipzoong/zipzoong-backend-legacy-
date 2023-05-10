import { IBusinessUser } from "@DTO/user/business_user";
import { prisma } from "@INFRA/DB";
import { ExpertBusinessType } from "@PRISMA";
import { isActive } from "@UTIL";
import { Exception } from "./exception";

export namespace Check {
  const mapper: Record<IBusinessUser.Type, ExpertBusinessType> = {
    "home service provider": "HS",
    "real estate agent": "RE"
  };

  /** @throw BadRequest */
  export const subExpertCategoriesValid = async ({
    type,
    sub_expertise_ids
  }: {
    type: IBusinessUser.Type;
    sub_expertise_ids: string[];
  }) => {
    const categories = (
      await prisma.expertSubCategoryModel.findMany({
        where: { id: { in: sub_expertise_ids } },
        include: { super_category: true }
      })
    ).filter(isActive);

    if (
      categories.length === 0 ||
      sub_expertise_ids.length !== categories.length
    )
      throw Exception.InvalidExpertise;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const super_category = categories[0]!.super_category;

    if (
      super_category.business_type !== mapper[type] ||
      !categories.every(
        ({ super_category_id }) => super_category_id === super_category.id
      )
    )
      throw Exception.InvalidExpertise;
  };
}
