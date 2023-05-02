import { ICustomer } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Prisma } from "@PRISMA";
import { createUserQuery } from "@PROVIDER/services/authentication/create-user.query";
import { agreements, users } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.customers.getOne");

export const test_success = async (connection: IConnection) => {
  const body = typia.random<ICustomer.ICreateRequest>();
  body.agreement_acceptances = (
    await agreements.getList(connection, {
      filter: ["all", "customer"]
    })
  ).map(({ id }) => id);

  const [user_id, ...queries] = createUserQuery(body);
  await prisma.$transaction<Prisma.PrismaPromise<unknown>[]>(queries);

  const received = await users.customers.getOne(connection, user_id);

  typia.assertEquals(received);
};

export const test_user_not_found = internal.test_error(
  (connection: IConnection) => users.customers.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "User Not Found");
