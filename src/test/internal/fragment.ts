import { IUser } from "@DTO/user/user";
import { Configuration } from "@INFRA/config";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { HttpError, IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { IToken } from "@PROVIDER/authentication/interface";
import { auth } from "@SDK";
import { Crypto, getISOString, Result } from "@UTIL";
import assert from "assert";
import { randomUUID } from "crypto";
import typia from "typia";
import { addAuthorizationHeader } from "./utils";

export const deleteCustomer = (customer_id: string) =>
  prisma.$transaction([
    prisma.oauthAccountModel.updateMany({
      where: { customer_id },
      data: { customer_id: null }
    }),
    prisma.agreementAcceptanceModel.deleteMany({
      where: { user_id: customer_id }
    }),
    prisma.customerModel.delete({ where: { id: customer_id } }),
    prisma.userModel.delete({ where: { id: customer_id } })
  ]);

export const deleteBusinessUser = (business_user_id: string) =>
  prisma.$transaction([
    prisma.oauthAccountModel.updateMany({
      where: { business_user_id },
      data: { business_user_id: null }
    }),
    prisma.agreementAcceptanceModel.deleteMany({
      where: { user_id: business_user_id }
    }),
    prisma.subExpertiseModel.deleteMany({
      where: { business_user_id: business_user_id }
    }),
    prisma.hSExampleImageModel.deleteMany({
      where: { hs_provider_id: business_user_id }
    }),
    prisma.businessCertificationImageModel.deleteMany({
      where: { business_user_id: business_user_id }
    }),
    prisma.hSProviderModel.deleteMany({
      where: { id: business_user_id }
    }),
    prisma.rEAgentModel.deleteMany({
      where: { id: business_user_id }
    }),
    prisma.businessUserModel.delete({
      where: { id: business_user_id }
    }),
    prisma.userModel.delete({ where: { id: business_user_id } })
  ]);

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

export const test_not_exist_account =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection): Promise<void> => {
    const { account_token } = Authentication.Token.Account.generate({
      account_id: "invalid_id"
    });

    const _connection: IConnection = addAuthorizationHeader(connection)(
      "account",
      account_token
    );

    await test_error(api)(HttpStatus.UNAUTHORIZED, "Authentication Fail")(
      _connection
    );
  };

export const test_inactive_account =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection): Promise<void> => {
    const code = "inactive_accessor";
    const { account_token } = await auth.sign_up.execute(connection, {
      code,
      oauth_type: "kakao"
    });

    await prisma.oauthAccountModel.updateMany({
      where: { oauth_sub: code, oauth_type: "kakao" },
      data: { is_deleted: true, deleted_at: getISOString() }
    });

    const _connection: IConnection = addAuthorizationHeader(connection)(
      "account",
      account_token
    );

    await test_error(api)(HttpStatus.FORBIDDEN, "Account Inactive")(
      _connection
    );
    await deleteAccount(account_token);
  };

export const test_invalid_account_token =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    await test_not_exist_account(api)(connection);
    await test_inactive_account(api)(connection);
  };

export const test_invalid_access_token =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    const { account_token } = Authentication.Token.Account.generate({
      account_id: randomUUID()
    });

    await test_error(api)(HttpStatus.UNAUTHORIZED, "Token Invalid")(
      addAuthorizationHeader(connection)("access", account_token)
    );
  };

export const test_access_token_expired =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    const now = new Date(Date.now() - 1000);
    const token = Crypto.encrypt({
      plain: typia.stringify<IToken.IAccessPayload<IUser.Type>>({
        type: "access",
        user_id: randomUUID(),
        user_type: "customer",
        expired_at: getISOString(now)
      }),
      key: Configuration.ACCESS_TOKEN_KEY
    });
    await test_error(api)(HttpStatus.FORBIDDEN, "Token Expired")(
      addAuthorizationHeader(connection)("access", token)
    );
  };

export const test_access_token_mismatch =
  (_user_type: IUser.Type) =>
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    let user_type: IUser.Type;
    if (_user_type === "customer") user_type = "home service provider";
    else if (_user_type === "home service provider") user_type = "customer";
    else user_type = "home service provider";

    const { access_token } = Authentication.Token.Access.generate({
      user_id: randomUUID(),
      user_type
    });

    await test_error(api)(HttpStatus.FORBIDDEN, "User Type Mismatch")(
      addAuthorizationHeader(connection)("access", access_token)
    );
  };

export const test_user_unverified =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  (user_type: IUser.Type) =>
  async (connection: IConnection) => {
    let user_id: string;
    if (user_type === "customer") {
      const customers = await prisma.customerModel.findMany({
        where: { phone: null, base: { is_deleted: false } }
      });
      user_id = RandomGenerator.pick(customers).id;
    } else if (user_type === "home service provider") {
      const providers = await prisma.hSProviderModel.findMany({
        where: { base: { is_verified: false, base: { is_deleted: false } } }
      });
      user_id = RandomGenerator.pick(providers).id;
    } else {
      const agents = await prisma.rEAgentModel.findMany({
        where: { base: { is_verified: false, base: { is_deleted: false } } }
      });
      user_id = RandomGenerator.pick(agents).id;
    }

    const { access_token } = Authentication.Token.Access.generate({
      user_id,
      user_type
    });

    await test_error(api)(HttpStatus.FORBIDDEN, "User Unverified")(
      addAuthorizationHeader(connection)("access", access_token)
    );
  };

export const deleteAccount = async (account_token: string) => {
  const result = Authentication.Token.Account.verify(account_token);

  if (Result.Error.is(result)) {
    throw Error("invalid account token");
  }
  await prisma.oauthAccountModel.delete({
    where: { id: Result.Ok.flatten(result).account_id }
  });
};

export const test_authorization_fail =
  <T = void>(api: (connection: IConnection) => Promise<T>) =>
  <U extends IUser.Type>(user_type: U) =>
  async (connection: IConnection) => {
    await test_invalid_access_token(api)(connection);
    await test_access_token_mismatch(user_type)(api)(connection);
    await test_access_token_expired(api)(connection);

    const { access_token } = Authentication.Token.Access.generate({
      user_id: randomUUID(),
      user_type
    });

    await test_error(api)(HttpStatus.FORBIDDEN, "User Not Found")(
      addAuthorizationHeader(connection)("access", access_token)
    );
  };
