import { IConnection } from "@nestia/fetcher";
import { business_rate_categories } from "@SDK";
import typia from "typia";

console.log("\n- business_rate_categories.getList");

export const test_success = async (connection: IConnection) => {
  const received = await business_rate_categories.getList(connection, {
    business_type: ["all", "HS", "RE"]
  });

  typia.assertEquals(received);
};
