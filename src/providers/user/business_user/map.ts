import { IBusinessUser } from "@DTO/user/business_user";
import { isUndefined } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { BusinessCertificationImageModel, ReviewStatsModel } from "@PRISMA";
import { isActive, isNull, pick, toFixed } from "@UTIL";

export namespace Map {
  export const expertise = (
    input: Awaited<
      ReturnType<
        typeof prisma.subExpertiseModel.findMany<{
          select: {
            is_deleted: true;
            sub_category: {
              select: { id: true; name: true; super_category: true };
            };
          };
        }>
      >
    >
  ): IBusinessUser.IExpertise => {
    const list = input.filter(isActive).map(pick("sub_category"));

    const super_category = list[0]?.super_category;
    if (isUndefined(super_category)) throw Error("expertise has to required");

    const expertise: IBusinessUser.IExpertise = {
      super_category_id: super_category.id,
      super_category_name: super_category.name,
      sub_expertises: list
        .filter(({ super_category: { id } }) => id === super_category.id)
        .map(({ id, name }) => ({
          sub_category_id: id,
          sub_category_name: name
        }))
    };
    return expertise;
  };

  export const certificationImages = (
    input: BusinessCertificationImageModel[]
  ): IBusinessUser.ICertificationImage[] =>
    input.filter(isActive).map(({ id, url }) => ({
      id,
      url
    }));

  export const reviewStats = ({
    review_stats
  }: {
    review_stats: ReviewStatsModel | null;
  }): IBusinessUser.IReviewStats =>
    isNull(review_stats)
      ? {
          review_cnt: 0,
          rating_avg: 0
        }
      : {
          review_cnt: review_stats.review_cnt.toNumber(),
          rating_avg: toFixed(3)(
            review_stats.rating_sum.toNumber() /
              review_stats.review_cnt.toNumber()
          )
        };
}
