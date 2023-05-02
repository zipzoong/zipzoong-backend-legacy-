/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ITokens } from "@DTO/auth";
import { IREAgent } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { agreements, auth, expert_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- users.re_agents.me.getMe");

export const test_success = async (connection: IConnection) => {
  const code = "test_re_agent_get_me";
  const { access_token } = await auth.sign_up.signUp(connection, {
    code,
    oauth_type: "kakao"
  });

  await prisma.oauthAccessorModel.updateMany({
    where: { oauth_sub: code, oauth_type: "kakao" },
    data: { phone: "test_phone_number" }
  });

  const create_input = typia.random<IREAgent.ICreateRequest>();

  create_input.agreement_acceptances = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);

  create_input.email_access_code = undefined;
  create_input.phone_access_code = undefined;

  const super_expertise_list = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["RE"] }
  );
  if (super_expertise_list.length === 0)
    throw Error("have to seed expert category");

  create_input.super_expertise_id = super_expertise_list[0]!.id;
  create_input.sub_expertise_ids = [
    super_expertise_list[0]!.sub_categories[0]!.id
  ];

  await auth.user.create(
    internal.addAuthorizationHeader(connection)("basic", access_token),
    create_input
  );
  // sign-up & user create

  const tokens = await auth.sign_in.signIn(connection, {
    code,
    user_type: "real estate agent",
    oauth_type: "kakao"
  });

  // sign-in

  const received = await users.re_agents.me.getMe(
    internal.addAuthorizationHeader(connection)("bearer", tokens.access_token)
  );

  typia.assertEquals(received);

  await internal.deleteAccessor(access_token);
};

export const test_invalid_token = internal.test_invalid_user_token(
  users.re_agents.me.getMe
);

export const test_user_token_mismatch = internal.test_user_token_mismatch(
  "real estate agent"
)(users.re_agents.me.getMe);

export const test_not_found_user = async (connection: IConnection) => {
  const payload = typia.random<ITokens.IUserPayload<"real estate agent">>();
  const token = Crypto.getUserToken(payload);

  await internal.test_error<void>(() =>
    users.re_agents.me.getMe(
      internal.addAuthorizationHeader(connection)("bearer", token)
    )
  )(HttpStatus.FORBIDDEN, "User Not Found")();
};
