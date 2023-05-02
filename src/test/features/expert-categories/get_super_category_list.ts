import { IExpertCategory } from "@DTO/expert-category";
import { IConnection } from "@nestia/fetcher";
import { expert_categories } from "@SDK";
import typia from "typia";

console.log("\n- 상위 전문 분야 카테고리 목록 조회 시나리오");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IExpertCategory.ISuperSearch>();

  const received = await expert_categories.getSuperCategoryList(
    connection,
    query
  );

  typia.assertEquals(received);
};
