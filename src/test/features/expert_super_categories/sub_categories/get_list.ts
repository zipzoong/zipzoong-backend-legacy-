import { IExpertCategory } from "@DTO/expert_category";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { expert_super_categories } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- expert_super_categories.sub_categories.getList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IExpertCategory.ISuperSearch>();
  const super_categories = await expert_super_categories.getList(
    connection,
    query
  );
  const received = await ArrayUtil.asyncMap(super_categories)((category) =>
    expert_super_categories.sub_categories.getList(connection, category.id)
  );

  typia.assertEquals(received);
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  expert_super_categories.sub_categories.getList(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "Expert Category Not Found");
