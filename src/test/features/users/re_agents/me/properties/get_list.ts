import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import assert from "assert";
import typia from "typia";

console.log("\n- users.re_agents.me.properties.getList");

export const test_success = async (connection: IConnection) => {
  const agents = await prisma.rEAgentModel.findMany({
    where: { base: { is_verified: true, base: { is_deleted: false } } },
    include: { _count: { select: { properties: true } } }
  });

  const user_id = RandomGenerator.pick(
    agents.filter((agent) => agent._count.properties > 0)
  ).id;

  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id,
    user_type: "real estate agent"
  });

  const received = await users.re_agents.me.properties.getList(
    internal.addAuthorizationHeader(connection)("bearer", token),
    {}
  );

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
};

export const test_authorization_fail = internal.test_authorization_fail((cnt) =>
  users.re_agents.me.properties.getList(cnt, {})
)("real estate agent");

export const test_user_unverified = internal.test_user_unverified((cnt) =>
  users.re_agents.me.properties.getList(cnt, {})
)("real estate agent");
