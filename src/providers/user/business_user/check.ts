import { IBusinessUser } from "@DTO/user/business_user";
import { prisma } from "@INFRA/DB";
import { ExpertBusinessType, Prisma } from "@PRISMA";
import { isActive, isNull } from "@UTIL";
import User from "../user";
import { Exception } from "./exception";

export namespace Check {
  const mapper: Record<IBusinessUser.Type, ExpertBusinessType> = {
    "home service provider": "HS",
    "real estate agent": "RE"
  };

  /** @throw BadRequest */
  export const subExpertCategoriesValid = async ({
    type,
    sub_expertise_ids,
    tx = prisma
  }: {
    type: IBusinessUser.Type;
    sub_expertise_ids: string[];
    tx?: Prisma.TransactionClient;
  }) => {
    const categories = (
      await tx.expertSubCategoryModel.findMany({
        where: { id: { in: sub_expertise_ids } },
        include: { super_category: true }
      })
    ).filter(isActive);

    if (
      categories.length === 0 ||
      sub_expertise_ids.length !== categories.length
    )
      throw Exception.ExpertiseInvalid;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const super_category = categories[0]!.super_category;

    if (
      super_category.business_type !== mapper[type] ||
      !categories.every(
        ({ super_category_id }) => super_category_id === super_category.id
      )
    )
      throw Exception.ExpertiseInvalid;
  };

  /** @throw Not Found */
  export const verify = async ({
    user_id,
    tx = prisma
  }: {
    user_id: string;
    tx?: Prisma.TransactionClient;
  }) => {
    const user = await tx.businessUserModel.findFirst({
      where: { id: user_id },
      include: { base: true }
    });

    // user not exist
    if (isNull(user)) throw User.Exception.NotFound;
    // user inactive
    if (user.base.is_deleted) throw User.Exception.NotFound;
    // user unverified
    if (!user.is_verified) throw User.Exception.NotFound;

    return;
  };
}
