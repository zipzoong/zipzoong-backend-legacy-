import { customers } from "@SDK";
import { ICustomer } from "@DTO/user";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import typia from "typia";

export const test_customers_create_success = async (
  connection: IConnection
) => {
  const received = await ArrayUtil.asyncRepeat(10, () => {
    const body = typia.random<ICustomer.ICreate>();
    body.birth = body.birth && "970216";
    return customers.create(connection, body);
  });
  typia.assertEquals(received);
};
