import { IREAgent } from "@DTO/user";
import { re_agents } from "@SDK";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import typia from "typia";

console.log("  - --");

export const test_re_agents_create_success = async (
  connection: IConnection
) => {
  const received = await ArrayUtil.asyncRepeat(10, () => {
    const body = typia.random<IREAgent.ICreate>();
    return re_agents.create(connection, body);
  });

  typia.assertEquals(received);
};
