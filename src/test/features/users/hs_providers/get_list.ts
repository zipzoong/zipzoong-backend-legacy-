import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { service_categories, users } from "@SDK";
import { pick } from "@UTIL";
import assert from "assert";
import typia from "typia";

console.log("\n- users.hs_providers.getList");

export const test_success_filter_by_super_category = async (
  connection: IConnection
) => {
  const super_categories = await service_categories.super.getList(connection, {
    type: ["HS"]
  });

  const super_category_id = RandomGenerator.pick(super_categories).id;

  const received = await users.hs_providers.getList(connection, {
    page: 1,
    super_category_id: super_category_id
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
  received.data
    .map(pick("expertise"))
    .map(pick("super_category_id"))
    .forEach((id) => assert.strictEqual(id, super_category_id));
};

export const test_success_filter_by_sub_category = async (
  connection: IConnection
) => {
  const sub_categories = await prisma.serviceSubCategoryModel.findMany({
    where: {
      super_category: { type: "HS" },
      expertises: {
        some: {
          business_user: { is_verified: true }
        }
      }
    }
  });

  const sub_category_id = RandomGenerator.pick(sub_categories).id;

  const received = await users.hs_providers.getList(connection, {
    page: 1,
    sub_category_id: sub_category_id
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
  received.data
    .map(pick("expertise"))
    .forEach((expertise) =>
      assert.strictEqual(
        expertise.sub_expertises
          .map(pick("sub_category_id"))
          .includes(sub_category_id),
        true
      )
    );
};
