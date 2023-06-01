import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- users.re_agents.me.get");

export const test_success = async (connection: IConnection) => {
  const agents = await prisma.rEAgentModel.findMany({
    where: { base: { is_verified: true, base: { is_deleted: false } } }
  });

  const user_id = RandomGenerator.pick(agents).id;

  const { access_token } = Authentication.Token.Access.generate({
    user_id,
    user_type: "real estate agent"
  });

  const received = await users.re_agents.me.get(
    internal.addAuthorizationHeader(connection)("access", access_token)
  );

  typia.assertEquals(received);
};

export const test_authorization_fail = internal.test_authorization_fail(
  users.re_agents.me.get
)("real estate agent");
