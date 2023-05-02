import { IExpertCategory } from "@DTO/expert-category";
import { IConnection } from "@nestia/fetcher";
import { expert_categories } from "@SDK";
import typia from "typia";

console.log("\n- expert_categories.getSuperCategoryList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IExpertCategory.ISuperSearch>();

  const received = await expert_categories.getSuperCategoryList(
    connection,
    query
  );

  typia.assertEquals(received);
};
