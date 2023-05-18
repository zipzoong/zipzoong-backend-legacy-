import { IConnection } from "@nestia/fetcher";
import { service_categories } from "@SDK";
import assert from "assert";
import typia from "typia";

console.log("\n- service_categories.super.getList");

export const test_success = async (connection: IConnection) => {
  const received = await service_categories.super.getList(connection, {
    type: ["HS", "RE"]
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.length, 0);
};
