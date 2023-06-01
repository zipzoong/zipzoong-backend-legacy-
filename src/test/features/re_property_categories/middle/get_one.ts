import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { re_property_categories } from "@SDK";
import { internal } from "@TEST/internal";
import { pick } from "@UTIL";
import assert from "assert";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- re_property_categories.middle.getOne");

export const test_success = async (connection: IConnection) => {
  const super_categories = await re_property_categories.super.getList(
    connection
  );
  const received = await ArrayUtil.asyncMap(
    super_categories.flatMap(pick("middle_categories")).map(pick("id"))
  )((category_id) =>
    re_property_categories.middle.getOne(connection, category_id)
  );

  typia.assertEquals(received);
  assert.notStrictEqual(received.length, 0);
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  re_property_categories.middle.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "RE-Property Category Not Found");
