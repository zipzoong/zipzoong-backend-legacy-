import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import assert from "assert";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.re_agents.properties.getList");

export const test_success = async (connection: IConnection) => {
  const { data } = await users.re_agents.getList(connection, {});
  const agent = RandomGenerator.pick(data);
  const received = await users.re_agents.properties.getList(
    connection,
    agent.id,
    {}
  );

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  users.re_agents.properties.getList(connection, randomUUID(), {})
);
