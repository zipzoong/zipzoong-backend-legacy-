import { ITokens } from "@DTO/auth";
import { IUser } from "@DTO/user/user";
import { prisma } from "@INFRA/DB";
import { HttpError, IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { auth } from "@SDK";
import { Mutable } from "@TYPE";
import { getISOString } from "@UTIL";
import assert from "assert";
import typia from "typia";
import { addAuthorizationHeader } from "./utils";

export const test_error =
  <T = void>(api: (data: T) => Promise<unknown>) =>
  (statusCode: HttpStatus, message: string) =>
  async (data: T) => {
    try {
      await api(data);
      throw Error("Unexpected Success!");
    } catch (error) {
      if (!(error instanceof HttpError)) {
        throw error;
      }
      assert.deepStrictEqual(
        { status: error.status, message: error.message },
        {
          status: statusCode,
          message
        }
      );
    }
  };

export const test_not_exist_accessor =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection): Promise<void> => {
    const accessor_token = Authentication.Crypto.getAccessorToken({
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

export const test_inactive_accessor =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection): Promise<void> => {
    const { access_token } = await auth.sign_up.execute(connection, {
      code: "inactive_accessor",
      oauth_type: "kakao"
    });

    await prisma.oauthAccessorModel.updateMany({
      where: { oauth_sub: "inactive_accessor", oauth_type: "kakao" },
      data: { is_deleted: true, deleted_at: getISOString() }
    });

    const _connection: IConnection = addAuthorizationHeader(connection)(
      "basic",
      access_token
    );

    await test_error(api)(HttpStatus.FORBIDDEN, "Inactive Accessor")(
      _connection
    );
    await deleteAccessor(access_token);
  };

export const test_invalid_accessor =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    await test_not_exist_accessor(api)(connection);
    await test_inactive_accessor(api)(connection);
  };

export const test_invalid_user_token =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    const payload = typia.random<ITokens.IOauthPayload>();
    const access_token = Authentication.Crypto.getAccessorToken(payload);

    await test_error(api)(HttpStatus.UNAUTHORIZED, "Authentication Fail")(
      addAuthorizationHeader(connection)("bearer", access_token)
    );
  };

export const test_user_token_mismatch =
  (user_type: IUser.Type) =>
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    const payload = typia.random<Mutable<ITokens.IUserPayload>>();

    if (user_type === "customer") payload.user_type = "home service provider";
    if (user_type === "home service provider") payload.user_type = "customer";
    if (user_type === "real estate agent")
      payload.user_type = "home service provider";

    const access_token = Authentication.Crypto.getUserToken(payload);

    await test_error(api)(HttpStatus.FORBIDDEN, "User Type Mismatch")(
      addAuthorizationHeader(connection)("bearer", access_token)
    );
  };

export const deleteAccessor = async (accessor_token: string) => {
  const { accessor_id } =
    Authentication.Crypto.getAccessorTokenPayload(accessor_token);

  await prisma.oauthAccessorModel.delete({ where: { id: accessor_id } });
};

export const test_authorization_fail =
  <T = void>(api: (connection: IConnection) => Promise<T>) =>
  <U extends IUser.Type>(user_type: U) =>
  async (connection: IConnection) => {
    await test_invalid_user_token(api)(connection);

    await test_user_token_mismatch(user_type)(api)(connection);

    const payload = typia.random<Mutable<ITokens.IUserPayload>>();

    payload.user_type = user_type;

    const token = Authentication.Crypto.getUserToken(payload);

    await test_error(api)(HttpStatus.FORBIDDEN, "User Not Found")(
      addAuthorizationHeader(connection)("bearer", token)
    );
  };
