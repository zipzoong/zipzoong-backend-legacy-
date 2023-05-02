import { ICustomer } from "@DTO/user";
import { IConnection } from "@nestia/fetcher";
import { agreements, auth, users } from "@SDK";
import { deleteAccessor } from "@TEST/features/auth/internal";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- 일반 고객 개인 프로필 조회 시나리오");
/**
export const test_success = async (connection: IConnection) => {
  const { access_token } = await auth.sign_up.signUp(connection, {
    code: "test_customer_get_me",
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
    code: "user_customer_get_me",
    user_type: "customer",
    oauth_type: "kakao"
  });

  const received = await users.customers.me.getMe(
    internal.addAuthorizationHeader(connection)("bearer", tokens.access_token)
  );

  typia.assertEquals(received);

  await deleteAccessor(access_token);
};
*/
