import { IConnection } from "@nestia/fetcher";
import { re_properties } from "@SDK";
import assert from "assert";
import typia from "typia";

console.log("\n- re_properties.getList");

export const test_success = async (connection: IConnection) => {
  const received = await re_properties.getList(connection, {});

  typia.assertEquals(received);

  assert.notStrictEqual(received.data.length, 0);
};
