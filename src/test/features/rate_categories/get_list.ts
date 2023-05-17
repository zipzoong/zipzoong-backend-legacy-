import { IConnection } from "@nestia/fetcher";
import { rate_categories } from "@SDK";
import assert from "assert";
import typia from "typia";

console.log("\n- rate_categories.getList");

export const test_success = async (connection: IConnection) => {
  const received = await rate_categories.getList(connection, {
    target_type: ["all"]
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.length, 0);
};
