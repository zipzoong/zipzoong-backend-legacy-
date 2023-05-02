import { IConnection } from "@nestia/fetcher";
import { auth } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";
import { deleteAccessor } from "./internal";

console.log("\n- 소셜 프로필 조회 시나리오");

export const test_success = async (connection: IConnection): Promise<void> => {
  const { access_token } = await auth.sign_up.signUp(connection, {
    code: "test_user_get_profile",
    oauth_type: "kakao"
  });

  const received = await auth.profile.getProfile(
    internal.addHeader(connection)("Authorization", `basic ${access_token}`)
  );

  typia.assertEquals(received);

  await deleteAccessor(access_token);
};

export const test_invalid_accessor = internal.test_invalid_accessor(
  auth.profile.getProfile
);
