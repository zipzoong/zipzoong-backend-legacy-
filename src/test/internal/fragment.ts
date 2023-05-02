import { prisma } from "@INFRA/DB";
import { HttpError, IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { auth } from "@SDK";
import { deleteAccessor } from "@TEST/features/auth/internal";
import { getISOString } from "@UTIL";
import assert from "assert";
import { addAuthorizationHeader } from "./utils";

export const test_error =
  <T>(api: (data: T) => Promise<unknown>) =>
  (statusCode: HttpStatus, message: string) =>
  async (data: T) => {
    try {
      await api(data);
      throw Error("Unexpected Success!");
    } catch (error) {
      if (!(error instanceof HttpError)) {
        throw error;
      }
      assert.strictEqual(error.status, statusCode);
      assert.strictEqual(error.message, message);
    }
  };

export const test_not_exist_accessor = async <T>(
  connection: IConnection,
  api: (connection: IConnection) => Promise<T>
): Promise<void> => {
  const accessor_token = Crypto.getAccessorToken({
    type: "accessor",
    accessor_id: "invalid_id"
  });

  const _connection: IConnection = addAuthorizationHeader(connection)(
    "basic",
    accessor_token
  );

  await test_error(api)(HttpStatus.UNAUTHORIZED, "Authentication Fail")(
    _connection
  );
};

export const test_inactive_accessor = async <T>(
  connection: IConnection,
  api: (connection: IConnection) => Promise<T>
): Promise<void> => {
  const { access_token } = await auth.sign_up.signUp(connection, {
    code: "inactive_accessor",
    oauth_type: "kakao"
  });
  const { accessor_id } = Crypto.getAccessorTokenPayload(access_token);

  await prisma.oauthAccessorModel.update({
    where: { id: accessor_id },
    data: { is_deleted: true, deleted_at: getISOString() }
  });

  const _connection: IConnection = addAuthorizationHeader(connection)(
    "basic",
    access_token
  );

  await test_error(api)(HttpStatus.FORBIDDEN, "Inactive Accessor")(_connection);
  await deleteAccessor(access_token);
};

export const test_invalid_accessor =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    await test_not_exist_accessor(connection, api);
    await test_inactive_accessor(connection, api);
  };
