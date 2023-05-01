import { prisma } from "@INFRA/DB";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { auth } from "@SDK";
import { internal } from "@TEST/internal";
import { getISOString } from "@UTIL";
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

export const test_unauthorized_not_exist_accessor = async (
  connection: IConnection
): Promise<void> => {
  const accessor_token = Crypto.getAccessorToken({
    type: "accessor",
    accessor_id: "invalid_id"
  });

  await internal.test_error((token: string) =>
    auth.profile.getProfile(
      internal.addHeader(connection)("Authorization", `basic ${token}`)
    )
  )(
    HttpStatus.UNAUTHORIZED,
    "Authentication Fail"
  )(accessor_token);
};

export const test_forbidden_inactive_accessor = async (
  connection: IConnection
): Promise<void> => {
  const { access_token } = await auth.sign_up.signUp(connection, {
    code: "test_user_get_profile",
    oauth_type: "kakao"
  });
  const { accessor_id } = Crypto.getAccessorTokenPayload(access_token);

  await prisma.oauthAccessorModel.update({
    where: { id: accessor_id },
    data: { is_deleted: true, deleted_at: getISOString() }
  });

  await internal.test_error((token: string) =>
    auth.profile.getProfile(
      internal.addHeader(connection)("Authorization", `basic ${token}`)
    )
  )(
    HttpStatus.FORBIDDEN,
    "Inactive Accessor"
  )(access_token);

  await deleteAccessor(access_token);
};
