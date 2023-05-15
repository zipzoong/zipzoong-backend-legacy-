import { IBusinessRatesStats } from "@DTO/business_rates_stats";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { business_rates, business_rate_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";

console.log("\n- business_rates.create");

export const test_success = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } }
  });
  const user_id = RandomGenerator.pick(customers).id;
  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id,
    user_type: "customer"
  });
  const { data: ratees } = await users.re_agents.getList(connection, {});
  const categories = await business_rate_categories.getList(connection, {
    business_type: ["all", "RE"]
  });
  await business_rates.create(
    internal.addAuthorizationHeader(connection)("bearer", token),
    {
      ratee_id: RandomGenerator.pick(ratees).id,
      rate_category_id: RandomGenerator.pick(categories).id,
      score: 10
    }
  );
};

// Unauthorized
// Forbidden

export const test_authorization_fail = internal.test_authorization_fail(
  (connection: IConnection) =>
    business_rates.create(
      connection,
      typia.random<IBusinessRatesStats.IRate.ICreate>()
    )
)("customer");

// forbidden if customer unverified

// not found if ratee not found
