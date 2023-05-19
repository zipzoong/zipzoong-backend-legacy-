import { IReview } from "@DTO/review";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { reviews } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- reviews.create");

const createBody = typia.createRandom<IReview.ICreateRequest>();

export const test_success = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } },
    include: { _count: { select: { reviews: true } } },
    take: 10
  });

  const user_id = RandomGenerator.pick(
    customers.filter((customer) => customer._count.reviews === 0)
  ).id;

  const user_token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id,
    user_type: "customer"
  });

  const reviewees = await prisma.businessUserModel.findMany({
    where: { is_verified: true, base: { is_deleted: false } }
  });

  const body = createBody();
  body.reviewee_id = RandomGenerator.pick(reviewees).id;

  await reviews.create(
    internal.addAuthorizationHeader(connection)("bearer", user_token),
    body
  );

  await prisma.reviewModel.deleteMany({ where: { reviewer_id: user_id } });
};

const api = (connection: IConnection) =>
  reviews.create(connection, createBody());

export const test_authorization_fail =
  internal.test_authorization_fail(api)("customer");

export const test_user_unverified =
  internal.test_user_unverified(api)("customer");

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

  await internal.test_error(api)(HttpStatus.NOT_FOUND, "User Not Found")(
    internal.addAuthorizationHeader(connection)("bearer", token)
  );
};
