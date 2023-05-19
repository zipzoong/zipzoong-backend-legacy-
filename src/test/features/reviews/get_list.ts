import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { reviews } from "@SDK";
import assert from "assert";
import typia from "typia";

console.log("\n- reviews.getList");

export const test_success_no_filter = async (connection: IConnection) => {
  const received = await reviews.getList(connection, {});

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
};

export const test_success_filter_by_reviewer_id = async (
  connection: IConnection
) => {
  const customers = await prisma.customerModel.findMany({
    where: { phone: { not: null }, base: { is_deleted: false } },
    include: { _count: { select: { reviews: true } } }
  });

  const user_id = RandomGenerator.pick(
    customers.filter((customer) => customer._count.reviews > 0)
  ).id;

  const received = await reviews.getList(connection, {
    reviewer_id: user_id
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
};

export const test_success_filter_by_reviewee_id = async (
  connection: IConnection
) => {
  const business_users = await prisma.businessUserModel.findMany({
    where: { is_verified: true, base: { is_deleted: false } },
    include: { _count: { select: { reviews: true } } }
  });

  const reviewee_id = RandomGenerator.pick(
    business_users.filter((user) => user._count.reviews > 0)
  ).id;

  const received = await reviews.getList(connection, {
    reviewee_id
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
};
