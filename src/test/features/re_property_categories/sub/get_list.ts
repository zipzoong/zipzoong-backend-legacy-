import { IREPropertyCategory } from "@DTO/re_property_category";
import { IConnection } from "@nestia/fetcher";
import { re_property_sub_categories } from "@SDK";
import typia from "typia";

console.log("\n- re_property_sub_categories.getList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IREPropertyCategory.ISub.ISearch>();

  const received = await re_property_sub_categories.getList(connection, query);

  typia.assertEquals(received);
};
