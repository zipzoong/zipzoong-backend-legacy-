import { IPaginatedResponse } from "@DTO/common";
import { IReview } from "@DTO/review";
import { average, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import Authentication from "@PROVIDER/authentication";
import BusinessUser from "@PROVIDER/user/business_user";
import Customer from "@PROVIDER/user/customer";
import { getISOString, isActive, pick, toFixed } from "@UTIL";
import { Check } from "./check";
import { Json } from "./json";

export namespace Service {
  export const getList = ({
    page = 1,
    reviewee_id,
    reviewer_id
  }: IReview.ISearch): Promise<IPaginatedResponse<IReview>> =>
    pipe(
      30,

      async (take) =>
        prisma.reviewModel.findMany({
          where: { reviewee_id, reviewer_id, is_deleted: false },
          take,
          skip: (page - 1) * take,
          include: {
            reviewee: { include: { base: true } },
            reviewer: { include: { base: true } },
            rates: { include: { category: true } }
          }
        }),

      map((review) => {
        const rates = review.rates
          .filter(isActive)
          .filter((rate) => isActive(rate.category))
          .map((rate) => ({
            score: rate.score,
            category: {
              id: rate.category.id,
              name: rate.category.name,
              target_type: rate.category.target_type
            }
          }));

        return {
          id: review.id,
          content: review.content,
          created_at: getISOString(review.created_at),
          updated_at: getISOString(review.updated_at),
          reviewer: { id: review.reviewer.id, name: review.reviewer.base.name },
          reviewee: { id: review.reviewee.id, name: review.reviewee.base.name },
          rate_avg: pipe(
            rates,

            map(pick("score")),

            average,

            toFixed(3)
          ),
          rates
        };
      }),

      toArray,

      (data) => ({ data, page })
    );

  export const create = async ({
    input,
    user_id
  }: {
    input: IReview.ICreateRequest;
    user_id: string;
  }): Promise<void> => {
    const tx = prisma;
    const reviewer = await Customer.Service.Me.get({ user_id, tx });
    Authentication.Check.verifyUser(reviewer);

    await BusinessUser.Check.verify({ user_id: input.reviewee_id, tx });

    // check category valid
    await Check.categoryValid({
      category_ids: input.rates.map(({ category_id }) => category_id),
      tx
    });

    const data = Json.createData({ ...input, reviewer_id: user_id });
    await tx.reviewModel.create({ data });
  };
}
