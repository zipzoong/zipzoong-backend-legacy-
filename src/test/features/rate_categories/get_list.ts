import { IConnection } from "@nestia/fetcher";
import { rate_categories } from "@SDK";
import assert from "assert";
import typia from "typia";

console.log("\n- rate_categories.getList");

export const test_success = async (connection: IConnection) => {
  const received = await rate_categories.getList(connection, {
    business_type: ["all"]
  });
  assert.strictEqual(received.length !== 0, true);
  typia.assertEquals(received);
};
