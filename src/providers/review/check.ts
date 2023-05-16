import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import { isActive } from "@UTIL";
import { Exception } from "./exception";

export namespace Check {
  /** @throw BadRequest */
  export const categoryValid = async ({
    category_ids,
    tx = prisma
  }: {
    category_ids: string[];
    tx?: Prisma.TransactionClient;
  }): Promise<void> => {
    // check duplicated
    const set = new Set(category_ids);
    if (set.size !== category_ids.length) throw Exception.Duplicated;
    // check exist
    // check active
    const list = (
      await tx.rateCategoryModel.findMany({
        where: { id: { in: category_ids } }
      })
    ).filter(isActive);

    if (set.size !== list.length) throw Exception.Invalid;

    // check business_type
    return;
  };
}
