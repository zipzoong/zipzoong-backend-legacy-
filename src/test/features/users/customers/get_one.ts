import { ICustomer } from "@DTO/user";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { agreements, auth, users } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- 일반 고객 조회 시나리오");

export const test_success = async (connection: IConnection) => {
  const { access_token } = await auth.sign_up.signUp(connection, {
    code: "customer_get_one",
    oauth_type: "kakao"
  });

  const body = typia.random<ICustomer.ICreateRequest>();
  body.agreement_acceptances = (
    await agreements.getList(connection, {
      filter: ["all", "customer"]
    })
  ).map(({ id }) => id);

  body.email_access_code = undefined;
  body.phone_access_code = undefined;

  await auth.user.create(
    internal.addAuthorizationHeader(connection)("basic", access_token),
    body
  );

  const tokens = await auth.sign_in.signIn(connection, {
    code: "customer_get_one",
    oauth_type: "kakao",
    user_type: "customer"
  });

  const { user_id } = Crypto.getUserTokenPayload(tokens.access_token);

  const received = await users.customers.getOne(connection, user_id);

  typia.assertEquals(received);

  await internal.deleteAccessor(access_token);
};

export const test_user_not_found = internal.test_error(
  (connection: IConnection) => users.customers.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "User Not Found");
