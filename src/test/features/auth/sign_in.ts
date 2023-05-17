import { ICustomer } from "@DTO/user/customer";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { agreements, auth } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- auth.sign_in.execute");

export const test_success = async (connection: IConnection) => {
  const { access_token } = await auth.sign_up.execute(connection, {
    code: "test_sign_in",
    oauth_type: "kakao"
  });

  const _connection = internal.addAuthorizationHeader(connection)(
    "basic",
    access_token
  );

  const input = typia.random<ICustomer.ICreateRequest>();
  input.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      target_type: ["all", "customer"]
    })
  ).map(({ id }) => id);

  await auth.user.create(_connection, input);

  const received = await auth.sign_in.execute(_connection, {
    code: "test_sign_in",
    oauth_type: "kakao",
    user_type: "customer"
  });

  typia.assertEquals(received);

  Authentication.Crypto.getUserTokenPayload(received.access_token);

  await internal.deleteAccessor(access_token);
};

export const test_invalid_account = internal.test_invalid_account(
  (connection: IConnection) =>
    auth.sign_in.execute(connection, {
      code: "inactive_accessor",
      oauth_type: "kakao",
      user_type: "customer"
    })
);

export const test_not_found_user = async (connection: IConnection) => {
  const { access_token } = await auth.sign_up.execute(connection, {
    code: "test_sign_in",
    oauth_type: "kakao"
  });

  const _connection = internal.addAuthorizationHeader(connection)(
    "basic",
    access_token
  );
  await internal.test_error(() =>
    auth.sign_in.execute(_connection, {
      code: "test_sign_in",
      oauth_type: "kakao",
      user_type: "customer"
    })
  )(HttpStatus.FORBIDDEN, "User Not Found")();

  await internal.deleteAccessor(access_token);
};
