import { prisma } from "@INFRA/DB";
import { ArrayUtil, RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { rate_categories, reviews } from "@SDK";
import { internal } from "@TEST/internal";
import { pick } from "@UTIL";
import assert from "assert";
import { randomInt } from "crypto";
import typia from "typia";

console.log("\n- reviews.getList");

export const test_success = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } },
    take: 10
  });

  const sample = RandomGenerator.sample(customers)(2).map(pick("id"));
  const user_token = Authentication.Crypto.getUserToken({
    type: "user",
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    user_id: sample[0]!,
    user_type: "customer"
  });

  const user_token_2 = Authentication.Crypto.getUserToken({
    type: "user",
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    user_id: sample[1]!,
    user_type: "customer"
  });

  const users = await prisma.businessUserModel.findMany({
    where: { base: { is_deleted: false }, is_verified: true },
    take: 30
  });

  const categories = await rate_categories.getList(connection, {
    business_type: ["all"]
  });

  await ArrayUtil.asyncForEach(
    RandomGenerator.sample(users)(5).map(pick("id"))
  )((reviewee_id) =>
    reviews.create(
      internal.addAuthorizationHeader(connection)("bearer", user_token),
      {
        reviewee_id,
        content: RandomGenerator.content(1)(0, 10)(5, 49),
        rates: categories.map((category) => ({
          score: randomInt(10),
          category_id: category.id
        }))
      }
    )
  );

  await ArrayUtil.asyncForEach(
    RandomGenerator.sample(users)(10).map(pick("id"))
  )((reviewee_id) =>
    reviews.create(
      internal.addAuthorizationHeader(connection)("bearer", user_token_2),
      {
        reviewee_id,
        content: RandomGenerator.content(1)(0, 10)(5, 49),
        rates: categories.map((category) => ({
          score: randomInt(10),
          category_id: category.id
        }))
      }
    )
  );
  const received_1 = await reviews.getList(connection, {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    reviewer_id: sample[0]!
  });

  const received_2 = await reviews.getList(connection, {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    reviewer_id: sample[1]!
  });
  typia.assertEquals(received_1);

  assert.strictEqual(received_1.data.length, 5);
  assert.strictEqual(received_2.data.length, 10);

  await prisma.$transaction([
    prisma.rateModel.deleteMany({}),
    prisma.reviewModel.deleteMany({})
  ]);
};
