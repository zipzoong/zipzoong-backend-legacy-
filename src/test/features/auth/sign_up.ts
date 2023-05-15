import { IAuthentication } from "@DTO/auth";
import { prisma } from "@INFRA/DB";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { auth } from "@SDK";
import { internal } from "@TEST/internal";
import { getISOString } from "@UTIL";
import typia from "typia";

console.log("\n- auth.sign_up.execute");

const code = "test_sign_up";

export const test_success = async (connection: IConnection): Promise<void> => {
  const received = await auth.sign_up.execute(connection, {
    code,
    oauth_type: "kakao"
  });

  typia.assertEquals(received);

  await internal.deleteAccessor(received.access_token);
};

export const test_oauth_fail = (connection: IConnection) =>
  ArrayUtil.asyncForEach(["kakao"] as const)(
    internal.test_error((oauth_type: IAuthentication.OauthType) =>
      auth.sign_up.execute(connection, { code: "invalid code", oauth_type })
    )(HttpStatus.UNAUTHORIZED, "Authentication Fail")
  );

export const test_inactive_accessor = async (connection: IConnection) => {
  const { access_token } = await auth.sign_up.execute(connection, {
    code,
    oauth_type: "kakao"
  });
  const { account_id } =
    Authentication.Crypto.getAccountTokenPayload(access_token);
  await prisma.oauthAccountModel.update({
    where: { id: account_id },
    data: { is_deleted: true, deleted_at: getISOString() }
  });

  await internal.test_error(() =>
    auth.sign_up.execute(connection, {
      code,
      oauth_type: "kakao"
    })
  )(HttpStatus.FORBIDDEN, "Account Inactive")();

  await internal.deleteAccessor(access_token);
};
