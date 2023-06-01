import { IConnection } from "@nestia/fetcher";
import { agreements } from "@SDK";
import assert from "assert";
import typia from "typia";

console.log("\n- agreements.getList");

export const test_success = async (connection: IConnection) => {
  const received = await agreements.getList(connection, {
    target_type: ["all"]
  });

  typia.assertEquals(received);
  assert.notStrictEqual(received.length, 0);
};
