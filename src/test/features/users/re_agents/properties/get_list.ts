import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import assert from "assert";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.re_agents.properties.getList");

export const test_success = async (connection: IConnection) => {
  const agents = await prisma.rEAgentModel.findMany({
    where: { base: { is_verified: true } },
    include: { _count: { select: { properties: true } } }
  });

  const user_id = RandomGenerator.pick(
    agents.filter((agent) => agent._count.properties > 0)
  ).id;

  const received = await users.re_agents.properties.getList(
    connection,
    user_id,
    {}
  );

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  users.re_agents.properties.getList(connection, randomUUID(), {})
)(HttpStatus.NOT_FOUND, "User Not Found");
