/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Authentication } from "@DTO/auth";
import { ICustomer, IHSProvider, IREAgent } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { agreements, auth, expert_categories } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";
import { deleteAccessor } from "./internal";

console.log("\n- 사용자 정보 생성 시나리오");

const getTokens = (connection: IConnection) =>
  auth.sign_up.signUp(connection, {
    code: "test_user_create",
    oauth_type: "kakao"
  });

const test_success = async (
  connection: IConnection,
  body: Authentication.ICreateRequest
): Promise<void> => {
  const { access_token } = await getTokens(connection);

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

  const list = await agreements.getList(connection, {
    filter: ["all", "customer"]
  });
  create.agreement_acceptances = list.map(({ id }) => id);
  create.email_access_code = undefined;
  create.phone_access_code = undefined;

  await test_success(connection, create);
};

export const test_success_re_agent_create = async (connection: IConnection) => {
  const create = typia.random<IREAgent.ICreateRequest>();
  const list = await agreements.getList(connection, {
    filter: ["all", "business", "RE"]
  });
  create.agreement_acceptances = list.map(({ id }) => id);
  create.email_access_code = undefined;
  create.phone_access_code = undefined;

  const super_expertise_list = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["RE"] }
  );
  if (super_expertise_list.length === 0)
    throw Error("have to seed expert category");

  create.super_expertise_id = super_expertise_list[0]!.id;
  create.sub_expertise_ids = [super_expertise_list[0]!.sub_categories[0]!.id];
  await test_success(connection, create);
};

export const test_success_hs_provider_create = async (
  connection: IConnection
) => {
  const create = typia.random<IHSProvider.ICreateRequest>();
  const list = await agreements.getList(connection, {
    filter: ["all", "business", "HS"]
  });
  create.agreement_acceptances = list.map(({ id }) => id);
  create.email_access_code = undefined;
  create.phone_access_code = undefined;

  const super_expertise_list = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["HS"] }
  );
  if (super_expertise_list.length === 0)
    throw Error("have to seed expert category");

  create.super_expertise_id = super_expertise_list[0]!.id;
  create.sub_expertise_ids = super_expertise_list[0]!.sub_categories.map(
    ({ id }) => id
  );

  await test_success(connection, create);
};

export const test_invalid_accessor = internal.test_invalid_accessor(
  (connection: IConnection) =>
    auth.user.create(connection, typia.random<Authentication.ICreateRequest>())
);

export const test_forbidden_already_user_exist = async (
  connection: IConnection
) => {
  const { access_token } = await getTokens(connection);
  const create = typia.random<ICustomer.ICreateRequest>();

  const _connection = internal.addAuthorizationHeader(connection)(
    "basic",
    access_token
  );

  const list = await agreements.getList(connection, {
    filter: ["all", "customer"]
  });
  create.agreement_acceptances = list.map(({ id }) => id);
  create.email_access_code = undefined;
  create.phone_access_code = undefined;
  await auth.user.create(_connection, create);

  await internal.test_error((body: ICustomer.ICreateRequest) =>
    auth.user.create(_connection, body)
  )(
    HttpStatus.FORBIDDEN,
    "Already Created"
  )(create);

  await deleteAccessor(access_token);
};

export const test_insufficient_agreement_acceptance = async (
  connection: IConnection
) => {
  const { access_token } = await getTokens(connection);
  const create = typia.random<ICustomer.ICreateRequest>();

  create.agreement_acceptances = [];
  create.email_access_code = undefined;
  create.phone_access_code = undefined;
  await internal.test_error((input: ICustomer.ICreateRequest) =>
    auth.user.create(
      internal.addAuthorizationHeader(connection)("basic", access_token),
      input
    )
  )(
    HttpStatus.FORBIDDEN,
    "Agreement Acceptance InSufficient"
  )(create);

  await deleteAccessor(access_token);
};

export const test_invalid_super_expertise = async (connection: IConnection) => {
  const { access_token } = await getTokens(connection);

  const create = typia.random<IREAgent.ICreateRequest>();
  const list = await agreements.getList(connection, {
    filter: ["all", "business", "RE"]
  });
  create.agreement_acceptances = list.map(({ id }) => id);
  create.email_access_code = undefined;
  create.phone_access_code = undefined;

  const super_expertise_list = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["HS"] }
  );
  if (super_expertise_list.length === 0)
    throw Error("have to seed expert category");

  create.super_expertise_id = super_expertise_list[0]!.id;
  create.sub_expertise_ids = [super_expertise_list[0]!.sub_categories[0]!.id];

  await internal.test_error((input: IREAgent.ICreateRequest) =>
    auth.user.create(
      internal.addAuthorizationHeader(connection)("basic", access_token),
      input
    )
  )(
    HttpStatus.BAD_REQUEST,
    "Invalid Expertise"
  )(create);
  await deleteAccessor(access_token);
};

export const test_invalid_sub_expertises = async (connection: IConnection) => {
  const { access_token } = await getTokens(connection);

  const create = typia.random<IREAgent.ICreateRequest>();
  const list = await agreements.getList(connection, {
    filter: ["all", "business", "RE"]
  });
  create.agreement_acceptances = list.map(({ id }) => id);
  create.email_access_code = undefined;
  create.phone_access_code = undefined;

  const valid_super_list = await expert_categories.getSuperCategoryList(
    connection,
    {
      filter: ["RE"]
    }
  );
  const super_expertise_list = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["HS"] }
  );
  if (super_expertise_list.length === 0)
    throw Error("have to seed expert category");

  create.super_expertise_id = valid_super_list[0]!.id;
  create.sub_expertise_ids = [super_expertise_list[0]!.sub_categories[0]!.id];

  await internal.test_error((input: IREAgent.ICreateRequest) =>
    auth.user.create(
      internal.addAuthorizationHeader(connection)("basic", access_token),
      input
    )
  )(
    HttpStatus.BAD_REQUEST,
    "Invalid Expertise"
  )(create);
  await deleteAccessor(access_token);
};

// test if phone required

export const test_phone_required = async (connection: IConnection) => {
  const { access_token } = await getTokens(connection);

  await prisma.oauthAccessorModel.updateMany({
    where: { oauth_sub: "test_user_create", oauth_type: "kakao" },
    data: { phone: null }
  });

  const _connection = internal.addAuthorizationHeader(connection)(
    "basic",
    access_token
  );

  const create = typia.random<IHSProvider.ICreateRequest>();
  const list = await agreements.getList(connection, {
    filter: ["all", "business", "HS"]
  });
  create.agreement_acceptances = list.map(({ id }) => id);
  create.email_access_code = undefined;
  create.phone_access_code = undefined;

  const super_expertise_list = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["HS"] }
  );
  if (super_expertise_list.length === 0)
    throw Error("have to seed expert category");

  create.super_expertise_id = super_expertise_list[0]!.id;
  create.sub_expertise_ids = super_expertise_list[0]!.sub_categories.map(
    ({ id }) => id
  );

  await internal.test_error((input: IHSProvider.ICreateRequest) =>
    auth.user.create(_connection, input)
  )(
    HttpStatus.BAD_REQUEST,
    "Phone Required"
  )(create);
};
