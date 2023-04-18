import { IHSCompany } from "@DTO/user";
import { hs_companies } from "@SDK";
import { internal } from "@TEST/internal";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import assert from "assert";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("  - --");

export const test_hs_companies_find_success = async (
  connection: IConnection
) => {
  const seed = await ArrayUtil.asyncRepeat(5, () => {
    const body = typia.random<IHSCompany.ICreate>();

    return hs_companies.create(connection, body);
  });

  const received = await ArrayUtil.asyncMap(
    seed.map((cu) => cu.id),
    (id) => hs_companies.find(connection, id)
  );

  assert.deepStrictEqual(received, seed);
};

export const test_hs_companies_not_found = async (connection: IConnection) =>
  ArrayUtil.asyncForEach(
    new Array(5).fill(1).map(() => randomUUID()),
    internal.test_error((id: string) => hs_companies.find(connection, id))(
      HttpStatus.NOT_FOUND,
      "Home Service Company Not Found"
    )
  );
