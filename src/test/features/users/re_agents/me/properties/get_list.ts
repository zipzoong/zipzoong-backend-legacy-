import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- users.re_agents.me.properties.getList");

export const test_success = async (connection: IConnection) => {
  const { data } = await users.re_agents.getList(connection, {});
  const agent = RandomGenerator.pick(data);
  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id: agent.id,
    user_type: "real estate agent"
  });

  const received = await users.re_agents.me.properties.getList(
    internal.addAuthorizationHeader(connection)("bearer", token),
    {}
  );

  typia.assertEquals(received);
};

export const test_authorization_fail = internal.test_authorization_fail(
  (connection) => users.re_agents.me.properties.getList(connection, {})
)("real estate agent");
