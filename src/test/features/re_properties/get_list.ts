import { IREProperty } from "@DTO/re_property";
import { IConnection } from "@nestia/fetcher";
import { re_properties } from "@SDK";
import typia from "typia";

console.log("\n- re_properties.getList");

export const test_success = async (connection: IConnection) => {
  const query = typia.random<IREProperty.ISearch>();
  const received = await re_properties.getList(connection, query);

  typia.assertEquals(received);
};
