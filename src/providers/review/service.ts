import { IPaginatedResponse } from "@DTO/common";
import { IReview } from "@DTO/review";
import { map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import Authentication from "@PROVIDER/authentication";
import BusinessUser from "@PROVIDER/user/business_user";
import Customer from "@PROVIDER/user/customer";
import { getISOString } from "@UTIL";
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
            reviewer: { include: { base: true } }
          }
        }),

      map((review) => ({
        id: review.id,
        reviewer: { id: review.reviewer.id, name: review.reviewer.base.name },
        reviewee: { id: review.reviewee.id, name: review.reviewee.base.name },
        rating: review.rating,
        content: review.content,
        created_at: getISOString(review.created_at),
        updated_at: getISOString(review.updated_at)
      })),

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

    const data = Json.createData({ ...input, reviewer_id: user_id });
    await tx.reviewModel.create({ data });
  };
}
