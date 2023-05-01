import { Authentication } from "@DTO/auth";
import { ICustomer, IHSProvider, IREAgent } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { IConnection } from "@nestia/fetcher";
import { auth } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";
import { deleteAccessor } from "./internal";

console.log("\n- 사용자 정보 생성 시나리오");

const test_success = async (
  connection: IConnection,
  body: Authentication.ICreateRequest
): Promise<void> => {
  const { access_token } = await auth.sign_up.signUp(connection, {
    code: "test_user_create",
    oauth_type: "kakao"
  });

  if (
    body.type === "home service provider" ||
    body.type === "real estate agent"
  )
    await prisma.oauthAccessorModel.updateMany({
      where: { oauth_sub: "test_user_create", oauth_type: "kakao" },
      data: { phone: "test_phone_number" }
    });

  await auth.user.create(
    internal.addAuthorizationHeader(connection)("basic", access_token),
    body
  );

  await deleteAccessor(access_token);
};

export const test_success_customer_create = async (
  connection: IConnection
): Promise<void> => {
  const create = typia.random<ICustomer.ICreateRequest>();
  create.agreement_acceptances = [];
  create.email_access_code = undefined;
  create.phone_access_code = undefined;

  await test_success(connection, create);
};

export const test_success_re_agent_create = async (connection: IConnection) => {
  const create = typia.random<IREAgent.ICreateRequest>();
  create.agreement_acceptances = [];
  create.email_access_code = undefined;
  create.phone_access_code = undefined;
  await test_success(connection, create);
};

export const test_success_hs_provider_create = async (
  connection: IConnection
) => {
  const create = typia.random<IHSProvider.ICreateRequest>();
  create.agreement_acceptances = [];
  create.email_access_code = undefined;
  create.phone_access_code = undefined;
  await test_success(connection, create);
};
