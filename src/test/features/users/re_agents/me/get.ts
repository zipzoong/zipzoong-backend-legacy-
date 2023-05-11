import { IREAgent } from "@DTO/user/re_agent";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
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

export const test_authorization_fail = internal.test_authorization_fail(
  users.re_agents.me.get
)("real estate agent");
