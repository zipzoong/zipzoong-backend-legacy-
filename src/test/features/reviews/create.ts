import { IReview } from "@DTO/review";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { rate_categories, reviews, users } from "@SDK";
import { internal } from "@TEST/internal";
import { pick } from "@UTIL";
import { randomInt, randomUUID } from "crypto";
import typia from "typia";

console.log("\n- reviews.create");

export const test_success = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } },
    take: 10
  });
  const user_token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id: RandomGenerator.pick(customers).id,
    user_type: "customer"
  });

  const { data: agents } = await users.re_agents.getList(connection, {});

  const categories = await rate_categories.getList(connection, {
    business_type: ["all"]
  });

  await reviews.create(
    internal.addAuthorizationHeader(connection)("bearer", user_token),
    {
      reviewee_id: RandomGenerator.pick(agents).id,
      content: "test review",
      rates: categories.map((category) => ({
        score: randomInt(10),
        category_id: category.id
      }))
    }
  );

  await prisma.$transaction([
    prisma.rateModel.deleteMany({}),
    prisma.reviewModel.deleteMany({})
  ]);
};

export const test_authorization_fail = internal.test_authorization_fail((cnt) =>
  reviews.create(cnt, typia.random<IReview.ICreateRequest>())
)("customer");

export const test_reviewee_not_found = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } },
    take: 5
  });
  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id: RandomGenerator.pick(customers).id,
    user_type: "customer"
  });

  await internal.test_error((_connection: IConnection) =>
    reviews.create(_connection, {
      reviewee_id: randomUUID(),
      content: "test review",
      rates: []
    })
  )(
    HttpStatus.NOT_FOUND,
    "User Not Found"
  )(internal.addAuthorizationHeader(connection)("bearer", token));
};

export const test_category_duplicated = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } },
    take: 5
  });
  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id: RandomGenerator.pick(customers).id,
    user_type: "customer"
  });

  const { data: providers } = await users.hs_providers.getList(connection, {});

  const categories = await rate_categories.getList(connection, {
    business_type: ["all"]
  });
  categories.push(RandomGenerator.pick(categories));

  await internal.test_error((_connection: IConnection) =>
    reviews.create(_connection, {
      reviewee_id: RandomGenerator.pick(providers).id,
      content: "test review",
      rates: categories.map((category) => ({
        score: 5,
        category_id: category.id
      }))
    })
  )(
    HttpStatus.BAD_REQUEST,
    "Rate Category Duplicated"
  )(internal.addAuthorizationHeader(connection)("bearer", token));
};

export const test_category_invalid = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } },
    take: 5
  });
  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id: RandomGenerator.pick(customers).id,
    user_type: "customer"
  });

  const { data: providers } = await users.hs_providers.getList(connection, {});

  const categories = (
    await rate_categories.getList(connection, {
      business_type: ["all"]
    })
  ).map(pick("id"));

  categories.push(randomUUID());

  await internal.test_error((_connection: IConnection) =>
    reviews.create(_connection, {
      reviewee_id: RandomGenerator.pick(providers).id,
      content: "test review",
      rates: categories.map((category_id) => ({
        score: 5,
        category_id
      }))
    })
  )(
    HttpStatus.BAD_REQUEST,
    "Rate Category Invalid"
  )(internal.addAuthorizationHeader(connection)("bearer", token));
};
