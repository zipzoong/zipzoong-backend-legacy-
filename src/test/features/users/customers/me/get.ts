import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- users.customers.me.get");

export const test_success = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } }
  });

  const user_id = RandomGenerator.pick(customers).id;

  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id,
    user_type: "customer"
  });

  const received = await users.customers.me.get(
    internal.addAuthorizationHeader(connection)("bearer", token)
  );

  typia.assertEquals(received);
};

export const test_authorization_fail = internal.test_authorization_fail(
  users.customers.me.get
)("customer");
