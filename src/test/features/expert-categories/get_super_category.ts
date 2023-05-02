import { IExpertCategory } from "@DTO/expert-category";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { expert_categories } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- 상위 전문 분야 카테고리 단일 조회 시나리오");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IExpertCategory.ISuperSearch>();
  const super_categories = await expert_categories.getSuperCategoryList(
    connection,
    query
  );
  const received = await ArrayUtil.asyncMap(super_categories, (category) =>
    expert_categories.getSuperCategory(connection, category.id)
  );

  typia.assertEquals(received);
};

export const test_not_found = async (connection: IConnection) =>
  internal.test_error((super_id: string) =>
    expert_categories.getSuperCategory(connection, super_id)
  )(
    HttpStatus.NOT_FOUND,
    "Expert Category Not Found"
  )(randomUUID());
