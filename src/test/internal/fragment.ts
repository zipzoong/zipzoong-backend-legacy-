import { ITokens } from "@DTO/auth";
import { IUser } from "@DTO/user/user";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { HttpError, IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { auth } from "@SDK";
import { Mutable } from "@TYPE";
import { getISOString } from "@UTIL";
import assert from "assert";
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
    const accessor_token = Authentication.Crypto.getAccountToken({
      type: "account",
      account_id: "invalid_id"
    });

    const _connection: IConnection = addAuthorizationHeader(connection)(
      "basic",
      accessor_token
    );

    await test_error(api)(HttpStatus.UNAUTHORIZED, "Authentication Fail")(
      _connection
    );
  };

export const test_inactive_account =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection): Promise<void> => {
    const code = "inactive_accessor";
    const { access_token } = await auth.sign_up.execute(connection, {
      code,
      oauth_type: "kakao"
    });

    await prisma.oauthAccountModel.updateMany({
      where: { oauth_sub: code, oauth_type: "kakao" },
      data: { is_deleted: true, deleted_at: getISOString() }
    });

    const _connection: IConnection = addAuthorizationHeader(connection)(
      "basic",
      access_token
    );

    await test_error(api)(HttpStatus.FORBIDDEN, "Account Inactive")(
      _connection
    );
    await deleteAccount(access_token);
  };

export const test_invalid_account =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    await test_not_exist_account(api)(connection);
    await test_inactive_account(api)(connection);
  };

export const test_invalid_user_token =
  <T>(api: (connection: IConnection) => Promise<T>) =>
  async (connection: IConnection) => {
    const payload = typia.random<ITokens.IAccountPayload>();
    const access_token = Authentication.Crypto.getAccountToken(payload);

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

    const token = Authentication.Crypto.getUserToken({
      type: "user",
      user_id,
      user_type
    });

    await test_error(api)(HttpStatus.FORBIDDEN, "User Unverified")(
      addAuthorizationHeader(connection)("bearer", token)
    );
  };

export const deleteAccount = async (accessor_token: string) => {
  const { account_id } =
    Authentication.Crypto.getAccountTokenPayload(accessor_token);

  await prisma.oauthAccountModel.delete({ where: { id: account_id } });
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
