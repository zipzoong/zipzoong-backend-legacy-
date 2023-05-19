import { IReview } from "@DTO/review";
import { Prisma } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace Json {
  export const createData = (input: IReview.ICreate) => {
    const now = getISOString();
    return {
      id: randomUUID(),
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null,
      content: input.content,
      reviewer: { connect: { id: input.reviewer_id } },
      reviewee: { connect: { id: input.reviewee_id } },
      rating: input.rating
    } satisfies Prisma.ReviewModelCreateInput;
  };
}
