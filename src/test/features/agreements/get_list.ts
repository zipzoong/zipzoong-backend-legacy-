import { IAgreement } from "@DTO/agreement";
import { IConnection } from "@nestia/fetcher";
import { agreements } from "@SDK";
import typia from "typia";

console.log("\n- agreements.getList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IAgreement.ISearch>();
  const received = await agreements.getList(connection, query);

  typia.assertEquals(received);
};
