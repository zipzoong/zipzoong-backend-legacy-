import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { expert_super_categories, users } from "@SDK";
import assert from "assert";
import typia from "typia";

console.log("\n- users.hs_providers.getList");

export const test_success_filter_super_category = async (
  connection: IConnection
) => {
  const super_categories = await expert_super_categories.getList(connection, {
    filter: ["HS"]
  });

  const super_category = RandomGenerator.pick(super_categories);

  const received = await users.hs_providers.getList(connection, {
    page: 1,
    super_category_name: super_category.name
  });

  typia.assertEquals(received);
  received.data.forEach((provider) =>
    assert.strictEqual(provider.expertise.super_category_id, super_category.id)
  );
};

export const test_success_filter_sub_category = async (
  connection: IConnection
) => {
  const super_categories = await expert_super_categories.getList(connection, {
    filter: ["HS"]
  });

  const super_category = RandomGenerator.pick(super_categories);
  const sub_category = RandomGenerator.pick(super_category.sub_categories);

  const received = await users.hs_providers.getList(connection, {
    page: 1,
    sub_category_name: sub_category.name
  });

  typia.assertEquals(received);
  received.data.forEach((provider) =>
    assert.strictEqual(
      provider.expertise.sub_expertises.some(
        (expertise) => expertise.sub_category_id === sub_category.id
      ),
      true
    )
  );
};
