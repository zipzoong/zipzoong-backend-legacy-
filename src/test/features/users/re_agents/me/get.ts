import { ITokens } from "@DTO/auth";
import { IREAgent } from "@DTO/user/re_agent";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { agreements, auth, expert_super_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- users.re_agents.me.get");

export const test_success = async (connection: IConnection) => {
  const code = "test_re_agent_get_me";
  const { access_token } = await auth.sign_up.execute(connection, {
    code,
    oauth_type: "kakao"
  });

  const create_input = typia.random<IREAgent.ICreateRequest>();

  create_input.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);

  create_input.phone_access_code = "required";

  const super_expertise_list = await expert_super_categories.getList(
    connection,
    { filter: ["RE"] }
  );
  const super_expertise = RandomGenerator.pick(super_expertise_list);

  create_input.sub_expertise_ids = super_expertise.sub_categories.map(
    ({ id }) => id
  );

  await auth.user.create(
    internal.addAuthorizationHeader(connection)("basic", access_token),
    create_input
  );
  // sign-up & user create

  const tokens = await auth.sign_in.execute(connection, {
    code,
    user_type: "real estate agent",
    oauth_type: "kakao"
  });

  // sign-in

  const received = await users.re_agents.me.get(
    internal.addAuthorizationHeader(connection)("bearer", tokens.access_token)
  );

  typia.assertEquals(received);

  await internal.deleteAccessor(access_token);
};

export const test_invalid_token = internal.test_invalid_user_token(
  users.re_agents.me.get
);

export const test_user_token_mismatch = internal.test_user_token_mismatch(
  "real estate agent"
)(users.re_agents.me.get);

export const test_not_found = async (connection: IConnection) => {
  const payload = typia.random<ITokens.IUserPayload<"real estate agent">>();
  const token = Authentication.Crypto.getUserToken(payload);

  await internal.test_error(() =>
    users.re_agents.me.get(
      internal.addAuthorizationHeader(connection)("bearer", token)
    )
  )(HttpStatus.FORBIDDEN, "User Not Found")();
};