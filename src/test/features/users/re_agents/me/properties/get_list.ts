import { ITokens } from "@DTO/auth";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- users.re_agents.me.properties.getList");

export const test_success = async (connection: IConnection) => {
  const { data } = await users.re_agents.getList(connection, {});
  const agent = RandomGenerator.pick(data);
  const token = Crypto.getUserToken({
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

export const test_invalid_token = internal.test_invalid_user_token(
  (connection: IConnection) =>
    users.re_agents.me.properties.getList(connection, {})
);

export const test_user_token_mismatch = internal.test_user_token_mismatch(
  "real estate agent"
)((connection: IConnection) =>
  users.re_agents.me.properties.getList(connection, {})
);

export const test_not_found = async (connection: IConnection) => {
  const payload = typia.random<ITokens.IUserPayload<"real estate agent">>();
  const token = Crypto.getUserToken(payload);

  await internal.test_error(() =>
    users.re_agents.me.get(
      internal.addAuthorizationHeader(connection)("bearer", token)
    )
  )(HttpStatus.FORBIDDEN, "User Not Found")();
};
