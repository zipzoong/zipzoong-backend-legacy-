import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import ServiceCategory from "@PROVIDER/service_category";
import { isActive } from "@UTIL";

export namespace Check {
  export const serviceCategoryValid = async ({
    service_ids,
    tx = prisma
  }: {
    service_ids: string[];
    tx?: Prisma.TransactionClient;
  }) => {
    const services = (
      await tx.serviceSuperCategoryModel.findMany({
        where: { id: { in: service_ids } }
      })
    ).filter(isActive);

    if (service_ids.length !== services.length)
      throw ServiceCategory.Exception.Invalid;
  };
}
