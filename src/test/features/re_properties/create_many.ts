import { ITokens } from "@DTO/auth";
import { IREProperty } from "@DTO/real_estate/re_property";
import { prisma } from "@INFRA/DB";
import { ArrayUtil, RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { re_properties, re_property_sub_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- re_properties.createMany");

const createRequest = typia.createRandom<IREProperty.ICreateRequest>();

export const test_success = async (connection: IConnection) => {
  const { data } = await re_property_sub_categories.getList(connection, {
    page: 1
  });

  const sub_category_ids = data.map(({ id }) => id);

  const list = await ArrayUtil.asyncRepeat(10)(async () => {
    const input = createRequest();
    input.sub_category_ids = RandomGenerator.sample(sub_category_ids)(3);
    return input;
  });

  const { data: agents } = await users.re_agents.getList(connection, {
    page: 1
  });

  const agent = RandomGenerator.pick(agents);

  const token = Crypto.getUserToken({
    type: "user",
    user_id: agent.id,
    user_type: "real estate agent"
  });

  await re_properties.createMany(
    internal.addAuthorizationHeader(connection)("bearer", token),
    { data: list }
  );
};

export const test_invalid_token = internal.test_invalid_user_token(
  (connection) =>
    re_properties.createMany(connection, { data: [createRequest()] })
);

export const test_user_token_mismatch = internal.test_user_token_mismatch(
  "real estate agent"
)((connection) =>
  re_properties.createMany(connection, { data: [createRequest()] })
);

export const test_not_found = async (connection: IConnection) => {
  const payload = typia.random<ITokens.IUserPayload<"real estate agent">>();
  const token = Crypto.getUserToken(payload);

  await internal.test_error(() =>
    re_properties.createMany(
      internal.addAuthorizationHeader(connection)("bearer", token),
      { data: [createRequest()] }
    )
  )(HttpStatus.FORBIDDEN, "User Not Found")();
};

// if agent is not verified -> forbidden
export const test_if_unverified_agent = async (connection: IConnection) => {
  const { data: agents } = await users.re_agents.getList(connection, {
    page: 1
  });

  const agent = RandomGenerator.pick(agents);

  await prisma.businessUserModel.updateMany({
    where: { id: agent.id },
    data: { is_verified: false }
  });

  await internal.test_error(() =>
    re_properties.createMany(
      internal.addAuthorizationHeader(connection)(
        "bearer",
        Crypto.getUserToken({
          type: "user",
          user_id: agent.id,
          user_type: "real estate agent"
        })
      ),
      { data: [createRequest()] }
    )
  )(HttpStatus.FORBIDDEN, "RE-Agent Unverified")();

  await prisma.businessUserModel.updateMany({
    where: { id: agent.id },
    data: { is_verified: true }
  });
};
