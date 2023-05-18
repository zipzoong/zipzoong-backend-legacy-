import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { service_categories, users } from "@SDK";
import { pick } from "@UTIL";
import assert from "assert";
import typia from "typia";

console.log("\n- users.hs_providers.getList");

export const test_success_filter_super_category = async (
  connection: IConnection
) => {
  const super_categories = await service_categories.super.getList(connection, {
    type: ["HS"]
  });

  const super_category = RandomGenerator.pick(super_categories);

  const received = await users.hs_providers.getList(connection, {
    page: 1,
    super_category_id: super_category.id
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
  received.data
    .map(pick("expertise"))
    .map(pick("super_category_id"))
    .forEach((id) => assert.strictEqual(id, super_category.id));
};

export const test_success_filter_sub_category = async (
  connection: IConnection
) => {
  const super_categories = await service_categories.super.getList(connection, {
    type: ["HS"]
  });

  const super_category = RandomGenerator.pick(super_categories);
  const sub_category = RandomGenerator.pick(super_category.sub_categories);

  const received = await users.hs_providers.getList(connection, {
    page: 1,
    sub_category_id: sub_category.id
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
  received.data
    .map(pick("expertise"))
    .forEach((expertise) =>
      assert.strictEqual(
        expertise.sub_expertises
          .map(pick("sub_category_id"))
          .includes(sub_category.id),
        true
      )
    );
};
