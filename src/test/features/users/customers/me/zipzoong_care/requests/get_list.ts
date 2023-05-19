import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import assert from "assert";
import typia from "typia";

console.log("\n- users.customers.me.zipzoong_care.requests.getList");

export const test_success = async (connection: IConnection) => {
  const customers = (
    await prisma.customerModel.findMany({
      where: { phone: { not: null }, base: { is_deleted: false } },
      include: { _count: { select: { zipzoong_care_requests: true } } }
    })
  ).filter((customer) => customer._count.zipzoong_care_requests > 0);

  const user_id = RandomGenerator.pick(customers).id;

  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id,
    user_type: "customer"
  });

  const cnt = internal.addAuthorizationHeader(connection)("bearer", token);

  const received = await users.customers.me.zipzoong_care.requests.getList(
    cnt,
    {
      status: ["pending"]
    }
  );

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
};

export const test_authorization_fail = internal.test_authorization_fail(
  (connection) =>
    users.customers.me.zipzoong_care.requests.getList(connection, {
      status: ["pending"]
    })
)("customer");

export const test_user_unverified = internal.test_user_unverified((cnt) =>
  users.customers.me.zipzoong_care.requests.getList(cnt, {
    status: ["pending"]
  })
)("customer");
