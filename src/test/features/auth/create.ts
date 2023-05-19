import { IAuthentication } from "@DTO/auth";
import { ICustomer } from "@DTO/user/customer";
import { IHSProvider } from "@DTO/user/hs_provider";
import { IREAgent } from "@DTO/user/re_agent";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import * as sdk from "@SDK";
import { internal } from "@TEST/internal";
import { isNotNull, pick } from "@UTIL";
import typia from "typia";

console.log("\n- auth.user.create");

const code = "test_user_create";
const getTokens = (connection: IConnection) =>
  sdk.auth.sign_up.execute(connection, {
    code,
    oauth_type: "kakao"
  });

const test_success = async (
  connection: IConnection,
  body: IAuthentication.ICreateRequest
): Promise<void> => {
  const { access_token } = await getTokens(connection);

  if (
    body.type === "home service provider" ||
    body.type === "real estate agent"
  )
    body.phone_access_code = "test";

  await sdk.auth.user.create(
    internal.addAuthorizationHeader(connection)("basic", access_token),
    body
  );
  const account = await prisma.oauthAccountModel.findFirstOrThrow({
    where: { oauth_sub: code, oauth_type: "kakao" }
  });

  if (isNotNull(account.customer_id)) {
    await internal.deleteCustomer(account.customer_id);
  }
  if (isNotNull(account.business_user_id)) {
    await internal.deleteBusinessUser(account.business_user_id);
  }
  await internal.deleteAccount(access_token);
};

export const test_success_customer_create = async (
  connection: IConnection
): Promise<void> => {
  const create = typia.random<ICustomer.ICreateRequest>();

  const list = await sdk.agreements.getList(connection, {
    target_type: ["all", "customer"]
  });
  create.acceptant_agreement_ids = list.map(pick("id"));

  await test_success(connection, create);
};

export const test_success_re_agent_create = async (connection: IConnection) => {
  const create = typia.random<IREAgent.ICreateRequest>();
  const list = await sdk.agreements.getList(connection, {
    target_type: ["all", "business", "RE"]
  });
  create.acceptant_agreement_ids = list.map(pick("id"));

  const super_expertise_list = await sdk.service_categories.super.getList(
    connection,
    { type: ["RE"] }
  );
  const super_expertise = RandomGenerator.pick(super_expertise_list);
  const sub_expertise = RandomGenerator.pick(super_expertise.sub_categories);

  create.sub_expertise_ids = [sub_expertise.id];
  await test_success(connection, create);
};

export const test_success_hs_provider_create = async (
  connection: IConnection
) => {
  const create = typia.random<IHSProvider.ICreateRequest>();
  const list = await sdk.agreements.getList(connection, {
    target_type: ["all", "business", "HS"]
  });
  create.acceptant_agreement_ids = list.map(pick("id"));

  const super_expertise_list = await sdk.service_categories.super.getList(
    connection,
    { type: ["HS"] }
  );
  const super_expertise = RandomGenerator.pick(super_expertise_list);

  create.sub_expertise_ids = super_expertise.sub_categories.map(pick("id"));

  await test_success(connection, create);
};

export const test_invalid_account = internal.test_invalid_account(
  (connection: IConnection) =>
    sdk.auth.user.create(
      connection,
      typia.random<IAuthentication.ICreateRequest>()
    )
);

export const test_already_user_exist = async (connection: IConnection) => {
  const { access_token } = await getTokens(connection);
  const create = typia.random<ICustomer.ICreateRequest>();

  const _connection = internal.addAuthorizationHeader(connection)(
    "basic",
    access_token
  );

  const list = await sdk.agreements.getList(connection, {
    target_type: ["all", "customer"]
  });
  create.acceptant_agreement_ids = list.map(pick("id"));
  await sdk.auth.user.create(_connection, create);

  await internal.test_error(() => sdk.auth.user.create(_connection, create))(
    HttpStatus.FORBIDDEN,
    "User Already Created"
  )();

  const account = await prisma.oauthAccountModel.findFirstOrThrow({
    where: { oauth_sub: code, oauth_type: "kakao" }
  });

  if (isNotNull(account.customer_id)) {
    await internal.deleteCustomer(account.customer_id);
  }

  await internal.deleteAccount(access_token);
};

export const test_insufficient_agreement_acceptance = async (
  connection: IConnection
) => {
  const { access_token } = await getTokens(connection);
  const create = typia.random<ICustomer.ICreateRequest>();
  create.acceptant_agreement_ids = [];

  await internal.test_error(() =>
    sdk.auth.user.create(
      internal.addAuthorizationHeader(connection)("basic", access_token),
      create
    )
  )(HttpStatus.FORBIDDEN, "Agreement Acceptance InSufficient")();

  await internal.deleteAccount(access_token);
};

export const test_invalid_super_expertise = async (connection: IConnection) => {
  const { access_token } = await getTokens(connection);

  const create = typia.random<IREAgent.ICreateRequest>();
  const list = await sdk.agreements.getList(connection, {
    target_type: ["all", "business", "RE"]
  });
  create.acceptant_agreement_ids = list.map(pick("id"));
  create.phone_access_code = "test_phone";

  const super_expertise_list = await sdk.service_categories.super.getList(
    connection,
    { type: ["HS"] }
  );
  const super_expertise = RandomGenerator.pick(super_expertise_list);

  create.sub_expertise_ids = super_expertise.sub_categories.map(pick("id"));

  await internal.test_error(() =>
    sdk.auth.user.create(
      internal.addAuthorizationHeader(connection)("basic", access_token),
      create
    )
  )(HttpStatus.BAD_REQUEST, "Expertise Invalid")();
  await internal.deleteAccount(access_token);
};

export const test_invalid_sub_expertises = async (connection: IConnection) => {
  const { access_token } = await getTokens(connection);

  const create = typia.random<IREAgent.ICreateRequest>();
  const list = await sdk.agreements.getList(connection, {
    target_type: ["all", "business", "RE"]
  });
  create.acceptant_agreement_ids = list.map(pick("id"));
  create.phone_access_code = "phone";

  const valid_super_list = await sdk.service_categories.super.getList(
    connection,
    { type: ["RE"] }
  );
  const super_expertise_list = await sdk.service_categories.super.getList(
    connection,
    { type: ["HS"] }
  );
  const super_expertise = RandomGenerator.pick(valid_super_list);
  const invalid_sub_categories =
    RandomGenerator.pick(super_expertise_list).sub_categories;

  create.sub_expertise_ids = super_expertise.sub_categories.map(pick("id"));

  create.sub_expertise_ids.push(...invalid_sub_categories.map(pick("id")));

  await internal.test_error(() =>
    sdk.auth.user.create(
      internal.addAuthorizationHeader(connection)("basic", access_token),
      create
    )
  )(HttpStatus.BAD_REQUEST, "Expertise Invalid")();
  await internal.deleteAccount(access_token);
};

export const test_phone_required = async (connection: IConnection) => {
  const { access_token } = await getTokens(connection);

  await prisma.oauthAccountModel.updateMany({
    where: { oauth_sub: code, oauth_type: "kakao" },
    data: { phone: null }
  });

  const _connection = internal.addAuthorizationHeader(connection)(
    "basic",
    access_token
  );

  const create = typia.random<IHSProvider.ICreateRequest>();
  const list = await sdk.agreements.getList(connection, {
    target_type: ["all", "business", "HS"]
  });
  create.acceptant_agreement_ids = list.map(pick("id"));
  create.phone_access_code = null;

  const super_expertise_list = await sdk.service_categories.super.getList(
    connection,
    { type: ["HS"] }
  );
  const super_expertise = RandomGenerator.pick(super_expertise_list);

  create.sub_expertise_ids = super_expertise.sub_categories.map(pick("id"));

  await internal.test_error(() => sdk.auth.user.create(_connection, create))(
    HttpStatus.BAD_REQUEST,
    "Phone Required"
  )();

  await internal.deleteAccount(access_token);
};
