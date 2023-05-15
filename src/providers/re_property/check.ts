import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import REPropertyCategory from "@PROVIDER/re_property_category";
import { isActive } from "@UTIL";

export namespace Check {
  /** @throw BadRequest */
  export const subCategoryValid = async ({
    sub_category_ids,
    tx = prisma
  }: {
    sub_category_ids: string[];
    tx?: Prisma.TransactionClient;
  }) => {
    const sub_category_set = new Set(sub_category_ids);

    const list = (
      await tx.rEPropertySubCategoryModel.findMany({
        where: { id: { in: sub_category_ids } }
      })
    ).filter(isActive);

    if (list.length !== sub_category_set.size)
      throw REPropertyCategory.Exception.Invalid;
  };
}
