import { ICustomer } from "@DTO/user/customer";
import { IConnection } from "@nestia/fetcher";
import { agreements, auth, users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- users.customers.me.get");

export const test_success = async (connection: IConnection) => {
  const code = "test_customer_get_me";
  const { access_token } = await auth.sign_up.execute(connection, {
    code,
    oauth_type: "kakao"
  });

  const create_customer_input = typia.random<ICustomer.ICreateRequest>();

  create_customer_input.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      filter: ["all", "customer"]
    })
  ).map(({ id }) => id);

  await auth.user.create(
    internal.addAuthorizationHeader(connection)("basic", access_token),
    create_customer_input
  );
  // sign-up & customer create

  const tokens = await auth.sign_in.execute(connection, {
    code,
    user_type: "customer",
    oauth_type: "kakao"
  });

  // sign-in

  const received = await users.customers.me.get(
    internal.addAuthorizationHeader(connection)("bearer", tokens.access_token)
  );

  typia.assertEquals(received);

  await internal.deleteAccessor(access_token);
};

export const test_authorization_fail = internal.test_authorization_fail(
  users.customers.me.get
)("customer");
