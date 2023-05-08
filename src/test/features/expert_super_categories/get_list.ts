import { IExpertCategory } from "@DTO/expert_category";
import { IConnection } from "@nestia/fetcher";
import { expert_super_categories } from "@SDK";
import typia from "typia";

console.log("\n- expert_super_categories.getList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IExpertCategory.ISuper.ISearch>();

  const received = await expert_super_categories.getList(connection, query);

  typia.assertEquals(received);
};
