import { IBusinessUser } from "@DTO/user/business_user";
import { prisma } from "@INFRA/DB";
import { BusinessCertificationImageModel } from "@PRISMA";
import { getISOString, isActive, pick } from "@UTIL";
import { Json } from "./json";

export namespace Map {
  export const expertise = (
    input: Awaited<
      ReturnType<
        typeof prisma.subExpertiseModel.findMany<{
          select: ReturnType<typeof Json.findExpertiseSelect>;
        }>
      >
    >
  ): IBusinessUser.IExpertise => {
    const list = input.filter(isActive).map(pick("sub_category"));

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain, @typescript-eslint/no-non-null-assertion
    const super_category = list[0]?.super_category!;

    return {
      super_category_id: super_category.id,
      super_category_name: super_category.name,
      sub_expertises: list
        .filter(({ super_category: { id } }) => id === super_category.id)
        .map(({ id, name }) => ({
          sub_category_id: id,
          sub_category_name: name
        }))
    };
  };

  export const certificationImages = (
    list: BusinessCertificationImageModel[]
  ): IBusinessUser.ICertificationImage[] =>
    list.filter(isActive).map(({ id, url, created_at, updated_at }) => ({
      id,
      url,
      created_at: getISOString(created_at),
      updated_at: getISOString(updated_at)
    }));
}
