import { IHSCompany } from "@DTO/user";
import { hs_companies } from "@SDK";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import typia from "typia";

console.log("  - --");

export const test_hs_companies_create_success = async (
  connection: IConnection
) => {
  const received = await ArrayUtil.asyncRepeat(10, () => {
    const body = typia.random<IHSCompany.ICreate>();
    return hs_companies.create(connection, body);
  });

  typia.assertEquals(received);
};
