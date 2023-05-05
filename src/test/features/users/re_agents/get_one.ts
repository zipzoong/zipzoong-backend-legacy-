import { IREAgent } from "@DTO/user/re_agent";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { REAgent } from "@PROVIDER/cores/user/re_agent";
import { agreements, expert_super_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.re_agents.getOne");

export const test_success = async (connection: IConnection) => {
  const body = typia.random<IREAgent.ICreate>();
  body.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);

  const list = await expert_super_categories.getList(connection, {
    filter: ["RE"]
  });

  const super_expertise = RandomGenerator.pick(list);

  body.super_expertise_id = super_expertise.id;
  body.sub_expertise_ids = super_expertise.sub_categories.map(({ id }) => id);

  const data = REAgent.json.createData(body);
  data.base.create.is_verified = true;
  const { id } = await prisma.rEAgentModel.create({ data });

  const received = await users.re_agents.getOne(connection, id);
  console.log(received);
  typia.assertEquals(received);
};

export const test_not_found_if_unverified = async (connection: IConnection) => {
  const body = typia.random<IREAgent.ICreate>();
  body.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);

  const list = await expert_super_categories.getList(connection, {
    filter: ["RE"]
  });

  const super_expertise = RandomGenerator.pick(list);

  body.super_expertise_id = super_expertise.id;
  body.sub_expertise_ids = super_expertise.sub_categories.map(({ id }) => id);

  const data = REAgent.json.createData(body);
  const { id } = await prisma.rEAgentModel.create({ data });
  await internal.test_error(() => users.re_agents.getOne(connection, id))(
    HttpStatus.NOT_FOUND,
    "User Not Found"
  );
};

export const test_user_not_found = internal.test_error(
  (connection: IConnection) => users.re_agents.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "User Not Found");
