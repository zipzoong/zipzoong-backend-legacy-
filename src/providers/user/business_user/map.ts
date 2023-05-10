import { IBusinessUser } from "@DTO/user/business_user";
import { isUndefined } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { isActive } from "@UTIL";

export namespace Map {
  export const expertise = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.subExpertiseModel.findFirst<{
            include: { sub_category: { include: { super_category: true } } };
          }>
        >
      >
    >[]
  ): IBusinessUser.IExpertise => {
    const list = input.filter(isActive);
    const super_category = list[0]?.sub_category.super_category;
    if (isUndefined(super_category)) throw Error("expertise has to required");

    const expertise: IBusinessUser.IExpertise = {
      super_category_id: super_category.id,
      super_category_name: super_category.name,
      sub_expertises: list
        .filter(
          ({ sub_category: { super_category_id } }) =>
            super_category_id === super_category.id
        )
        .map(({ sub_category }) => ({
          sub_category_id: sub_category.id,
          sub_category_name: sub_category.name
        }))
    };
    return expertise;
  };
}
