import { IREProperty } from "@DTO/re_property";
import { ArrayUtil, RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { re_properties, re_property_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import { pick } from "@UTIL";
import typia from "typia";

console.log("\n- re_properties.createMany");

const createRequest = typia.createRandom<IREProperty.ICreateRequest>();

export const test_success = async (connection: IConnection) => {
  const super_categories = await re_property_categories.super.getList(
    connection
  );

  const sub_category_ids = super_categories
    .flatMap(pick("middle_categories"))
    .flatMap(pick("sub_categories"))
    .map(pick("id"));

  const list = await ArrayUtil.asyncRepeat(10)(async () => {
    const input = createRequest();
    input.sub_category_ids = RandomGenerator.sample(sub_category_ids)(3);
    return input;
  });

  const { data: agents } = await users.re_agents.getList(connection, {
    page: 1
  });

  const agent = RandomGenerator.pick(agents);

  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id: agent.id,
    user_type: "real estate agent"
  });

  await re_properties.createMany(
    internal.addAuthorizationHeader(connection)("bearer", token),
    { data: list }
  );
};

export const test_authorization_fail = internal.test_authorization_fail(
  (connection: IConnection) =>
    re_properties.createMany(connection, { data: [createRequest()] })
)("real estate agent");

export const test_user_unverified = internal.test_user_unverified(
  (connection: IConnection) =>
    re_properties.createMany(connection, { data: [createRequest()] })
)("real estate agent");
