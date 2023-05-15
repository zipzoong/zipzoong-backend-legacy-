import { IConnection } from "@nestia/fetcher";
import { business_rates } from "@SDK";
import typia from "typia";

console.log("\n- business_rates.stats.getList");

export const test_success = async (connection: IConnection) => {
  const received = await business_rates.stats.getList(connection, {
    page: 1,
    rate_category_type: ["all", "HS", "RE"]
  });

  typia.assertEquals(received);
};
