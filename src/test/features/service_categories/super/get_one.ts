import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { service_categories } from "@SDK";
import { internal } from "@TEST/internal";
import { pick } from "@UTIL";
import assert from "assert";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- service_categories.super.getOne");

export const test_success = async (connection: IConnection) => {
  const super_categories = await service_categories.super.getList(connection, {
    type: ["HS", "RE"]
  });
  const received = await ArrayUtil.asyncMap(super_categories.map(pick("id")))(
    (category_id) => service_categories.super.getOne(connection, category_id)
  );

  typia.assertEquals(received);
  assert.notStrictEqual(received.length, 0);
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  service_categories.super.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "Service Category Not Found");
