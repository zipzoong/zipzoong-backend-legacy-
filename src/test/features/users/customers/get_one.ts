import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.customers.getOne");

export const test_success = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } }
  });

  const user_id = RandomGenerator.pick(customers).id;

  const received = await users.customers.getOne(connection, user_id);

  typia.assertEquals(received);
};

export const test_not_found_if_unverified = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: null }
  });

  const user_id = RandomGenerator.pick(customers).id;

  await internal.test_error(() => users.customers.getOne(connection, user_id))(
    HttpStatus.NOT_FOUND,
    "User Not Found"
  )();
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  users.customers.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "User Not Found");
