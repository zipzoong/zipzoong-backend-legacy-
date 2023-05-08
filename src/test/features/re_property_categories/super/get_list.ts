import { IREPropertyCategory } from "@DTO/real_estate/re_property_category";
import { IConnection } from "@nestia/fetcher";
import { re_property_super_categories } from "@SDK";
import typia from "typia";

console.log("\n- re_property_super_categories.getList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IREPropertyCategory.ISuper.ISearch>();

  const received = await re_property_super_categories.getList(
    connection,
    query
  );

  typia.assertEquals(received);
};
