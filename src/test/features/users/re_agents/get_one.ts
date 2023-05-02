/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IREAgent } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Prisma } from "@PRISMA";
import { createUserQuery } from "@PROVIDER/services/authentication/create-user.query";
import { agreements, expert_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import { isUndefined } from "@UTIL";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.re_agents.getOne");

export const test_success = async (connection: IConnection) => {
  const body = typia.random<IREAgent.ICreateRequest>();
  body.agreement_acceptances = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);

  const list = await expert_categories.getSuperCategoryList(connection, {
    filter: ["RE"]
  });

  const super_expertise = list[0];

  if (isUndefined(super_expertise)) throw Error("have to seed expert category");

  body.super_expertise_id = super_expertise.id;

  body.sub_expertise_ids = super_expertise.sub_categories.map(({ id }) => id);

  const [user_id, ...queries] = createUserQuery({
    ...body,
    phone: "test_phone_number"
  });
  await prisma.$transaction<Prisma.PrismaPromise<unknown>[]>(queries);

  const received = await users.re_agents.getOne(connection, user_id);

  typia.assertEquals(received);
};

export const test_user_not_found = internal.test_error(
  (connection: IConnection) => users.re_agents.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "User Not Found");
