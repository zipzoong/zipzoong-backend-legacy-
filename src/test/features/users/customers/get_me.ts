import { ITokens } from "@DTO/auth";
import { ICustomer } from "@DTO/user";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { agreements, auth, users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- 일반 고객 개인 프로필 조회 시나리오");

export const test_success = async (connection: IConnection) => {
  const code = "test_customer_get_me";
  const { access_token } = await auth.sign_up.signUp(connection, {
    code,
    oauth_type: "kakao"
  });

  const create_customer_input = typia.random<ICustomer.ICreateRequest>();

  create_customer_input.agreement_acceptances = (
    await agreements.getList(connection, {
      filter: ["all", "customer"]
    })
  ).map(({ id }) => id);

  create_customer_input.email_access_code = undefined;
  create_customer_input.phone_access_code = undefined;

  await auth.user.create(
    internal.addAuthorizationHeader(connection)("basic", access_token),
    create_customer_input
  );
  // sign-up & customer create

  const tokens = await auth.sign_in.signIn(connection, {
    code,
    user_type: "customer",
    oauth_type: "kakao"
  });

  // sign-in

  const received = await users.customers.me.getMe(
    internal.addAuthorizationHeader(connection)("bearer", tokens.access_token)
  );

  typia.assertEquals(received);

  await internal.deleteAccessor(access_token);
};

export const test_invalid_token = internal.test_invalid_user_token(
  users.customers.me.getMe
);

export const test_user_token_mismatch = internal.test_user_token_mismatch(
  "customer"
)(users.customers.me.getMe);

export const test_not_found_user = async (connection: IConnection) => {
  const payload = typia.random<ITokens.IUserPayload<"customer">>();
  const token = Crypto.getUserToken(payload);

  await internal.test_error<void>(() =>
    users.customers.me.getMe(
      internal.addAuthorizationHeader(connection)("bearer", token)
    )
  )(HttpStatus.FORBIDDEN, "User Not Found")();
};
