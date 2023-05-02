import { ICustomer } from "@DTO/user";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { agreements, auth } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- 로그인 시나리오");

export const test_success = async (connection: IConnection) => {
  const { access_token } = await auth.sign_up.signUp(connection, {
    code: "test_sign_in",
    oauth_type: "kakao"
  });

  const _connection = internal.addAuthorizationHeader(connection)(
    "basic",
    access_token
  );

  const input = typia.random<ICustomer.ICreateRequest>();
  input.agreement_acceptances = (
    await agreements.getList(connection, {
      filter: ["all", "customer"]
    })
  ).map(({ id }) => id);

  input.email_access_code = undefined;
  input.phone_access_code = undefined;

  await auth.user.create(_connection, input);

  const received = await auth.sign_in.signIn(_connection, {
    code: "test_sign_in",
    oauth_type: "kakao",
    user_type: "customer"
  });

  typia.assertEquals(received);

  Crypto.getUserTokenPayload(received.access_token);

  await internal.deleteAccessor(access_token);
};

export const test_invalid_accessor = internal.test_invalid_accessor(
  (connection: IConnection) =>
    auth.sign_in.signIn(connection, {
      code: "inactive_accessor",
      oauth_type: "kakao",
      user_type: "customer"
    })
);

export const test_not_found_user = async (connection: IConnection) => {
  const { access_token } = await auth.sign_up.signUp(connection, {
    code: "test_sign_in",
    oauth_type: "kakao"
  });

  const _connection = internal.addAuthorizationHeader(connection)(
    "basic",
    access_token
  );
  await internal.test_error<void>(() =>
    auth.sign_in.signIn(_connection, {
      code: "test_sign_in",
      oauth_type: "kakao",
      user_type: "customer"
    })
  )(HttpStatus.FORBIDDEN, "User Not Found")();

  await internal.deleteAccessor(access_token);
};
