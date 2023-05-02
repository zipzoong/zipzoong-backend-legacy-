import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { expert_categories, users } from "@SDK";
import typia from "typia";

console.log("\n- users.hs_providers.getList");

export const test_success = async (connection: IConnection) => {
  const super_categories = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["HS"] }
  );

  const received = await ArrayUtil.asyncMap(
    super_categories.map((category) => category.name),
    (name) =>
      users.hs_providers.getList(connection, {
        page: 1,
        super_expert_name: [name],
        sub_expert_name: []
      })
  );

  typia.assertEquals(received);
};
