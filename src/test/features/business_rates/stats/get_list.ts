import { IBusinessRateCategory } from "@DTO/business_rate_category";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { business_rates, business_rate_categories } from "@SDK";
import typia from "typia";

console.log("\n- business_rates.stats.getList");

export const test_success = async (connection: IConnection) => {
  const categories = await business_rate_categories.getList(connection, {
    business_type: []
  });

  const rate_category_type = typia.random<IBusinessRateCategory.Type[]>();

  const rate_category_name = RandomGenerator.sample(categories)(2).map(
    ({ name }) => name
  );

  const received = await business_rates.stats.getList(connection, {
    page: 1,
    ratee_id: [],
    rate_category_type,
    rate_category_name
  });

  typia.assertEquals(received);
};
