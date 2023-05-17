import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { service_categories, users } from "@SDK";
import { pick } from "@UTIL";
import assert from "assert";
import typia from "typia";

console.log("\n- users.re_agents.getList");

export const test_success_filter_super_category = async (
  connection: IConnection
) => {
  const super_categories = await service_categories.super.getList(connection, {
    type: ["RE"]
  });

  const super_category = RandomGenerator.pick(super_categories);

  const received = await users.re_agents.getList(connection, {
    page: 1,
    super_category_id: super_category.id
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
  received.data
    .map(pick("expertise"))
    .forEach(({ super_category_id }) =>
      assert.strictEqual(super_category_id, super_category.id)
    );
};

export const test_success_filter_sub_category = async (
  connection: IConnection
) => {
  const super_categories = await service_categories.super.getList(connection, {
    type: ["RE"]
  });

  const super_category = RandomGenerator.pick(super_categories);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const sub_category_id = super_category.sub_categories[0]!.id;

  const received = await users.re_agents.getList(connection, {
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
