import { IREAgent } from "@DTO/user";
import { re_agents } from "@SDK";
import { internal } from "@TEST/internal";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import assert from "assert";
import { randomUUID } from "crypto";
import typia from "typia";

export const test_re_agents_find_success = async (connection: IConnection) => {
  const seed = await ArrayUtil.asyncRepeat(5, () => {
    const body = typia.random<IREAgent.ICreate>();

    return re_agents.create(connection, body);
  });

  const received = await ArrayUtil.asyncMap(
    seed.map((cu) => cu.id),
    (id) => re_agents.find(connection, id)
  );

  assert.deepStrictEqual(received, seed);
};

export const test_re_agents_not_found = async (connection: IConnection) =>
  ArrayUtil.asyncForEach(
    new Array(5).fill(1).map(() => randomUUID()),
    internal.test_error((id: string) => re_agents.find(connection, id))(
      HttpStatus.NOT_FOUND,
      "Real Estate Agent Not Found"
    )
  );
