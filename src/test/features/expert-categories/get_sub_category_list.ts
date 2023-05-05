import { IExpertCategory } from "@DTO/expert-category";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { expert_categories } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- expert_categories.sub_categories.getSubCategoryList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IExpertCategory.ISuperSearch>();
  const super_categories = await expert_categories.getSuperCategoryList(
    connection,
    query
  );
  const received = await ArrayUtil.asyncMap(super_categories)((category) =>
    expert_categories.sub_categories.getSubCategoryList(connection, category.id)
  );

  typia.assertEquals(received);
};

export const test_not_found = async (connection: IConnection) =>
  internal.test_error(() =>
    expert_categories.getSuperCategory(connection, randomUUID())
  )(HttpStatus.NOT_FOUND, "Expert Category Not Found")();
