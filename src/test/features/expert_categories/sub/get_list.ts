import { IExpertCategory } from "@DTO/expert_category";
import { IConnection } from "@nestia/fetcher";
import { expert_sub_categories } from "@SDK";
import typia from "typia";

console.log("\n- expert_sub_categories.getList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IExpertCategory.ISub.ISearch>();

  const received = await expert_sub_categories.getList(connection, query);

  typia.assertEquals(received);
};
