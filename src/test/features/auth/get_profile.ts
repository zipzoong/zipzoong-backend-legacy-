import { IConnection } from "@nestia/fetcher";
import { auth } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- auth.profile.get");

export const test_success = async (connection: IConnection): Promise<void> => {
  const { access_token } = await auth.sign_up.execute(connection, {
    code: "test_user_get_profile",
    oauth_type: "kakao"
  });

  const received = await auth.profile.get(
    internal.addHeader(connection)("Authorization", `basic ${access_token}`)
  );

  typia.assertEquals(received);

  await internal.deleteAccount(access_token);
};

export const test_invalid_account = internal.test_invalid_account(
  auth.profile.get
);
