import { IREProperty } from "@DTO/re_property";
import { prisma } from "@INFRA/DB";
import { ArrayUtil, RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { re_properties, re_property_categories } from "@SDK";
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

  const agents = (
    await prisma.rEAgentModel.findMany({
      where: { base: { is_verified: true, base: { is_deleted: false } } },
      include: { _count: { select: { properties: true } } }
    })
  ).filter((agent) => agent._count.properties === 0);

  const user_id = RandomGenerator.pick(agents).id;

  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id,
    user_type: "real estate agent"
  });

  await re_properties.createMany(
    internal.addAuthorizationHeader(connection)("bearer", token),
    { data: list }
  );

  await prisma.rEPropertyCategoryModel.deleteMany({
    where: { re_property: { re_agent_id: user_id } }
  });
  await prisma.rEPropertyModel.deleteMany({ where: { re_agent_id: user_id } });
};

export const test_authorization_fail = internal.test_authorization_fail(
  (connection: IConnection) =>
    re_properties.createMany(connection, { data: [createRequest()] })
)("real estate agent");

export const test_user_unverified = internal.test_user_unverified(
  (connection: IConnection) =>
    re_properties.createMany(connection, { data: [createRequest()] })
)("real estate agent");
