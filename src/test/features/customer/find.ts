import { internal } from "src/test/internal";
import { customers } from "@SDK";
import { ICustomer } from "@DTO/user";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import assert from "assert";
import typia from "typia";
import { randomUUID } from "crypto";
import { HttpStatus } from "@nestjs/common";

export const test_customers_find_success = async (connection: IConnection) => {
  const seed = await ArrayUtil.asyncRepeat(5, () => {
    const body = typia.random<ICustomer.ICreate>();
    body.birth = undefined;
    return customers.create(connection, body);
  });

  const received = await ArrayUtil.asyncMap(
    seed.map((cu) => cu.id),
    (id) => customers.find(connection, id)
  );

  assert.deepStrictEqual(received, seed);
};

export const test_customers_not_found = async (connection: IConnection) =>
  ArrayUtil.asyncForEach(
    new Array(5).fill(1).map(() => randomUUID()),
    internal.test_error((id: string) => customers.find(connection, id))(
      (err) => {
        assert.strictEqual(err.status, HttpStatus.NOT_FOUND);
        assert.strictEqual(err.message, "User Not Found");
      }
    )
  );
