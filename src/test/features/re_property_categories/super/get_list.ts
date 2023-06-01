import { IConnection } from "@nestia/fetcher";
import { re_property_categories } from "@SDK";
import assert from "assert";
import typia from "typia";

console.log("\n- re_property_categories.super.getList");

export const test_success = async (connection: IConnection) => {
  const received = await re_property_categories.super.getList(connection);

  typia.assertEquals(received);
  assert.notStrictEqual(received.length, 0);
};
