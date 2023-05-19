import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.hs_providers.getOne");

export const test_success = async (connection: IConnection) => {
  const providers = await prisma.hSProviderModel.findMany({
    where: {
      base: { is_verified: true, base: { is_deleted: false } }
    }
  });

  const user_id = RandomGenerator.pick(providers).id;

  const received = await users.hs_providers.getOne(connection, user_id);

  typia.assertEquals(received);
};

export const test_not_found_if_unverified = async (connection: IConnection) => {
  const providers = await prisma.hSProviderModel.findMany({
    where: {
      base: { is_verified: false, base: { is_deleted: false } }
    }
  });

  const user_id = RandomGenerator.pick(providers).id;

  await internal.test_error(() =>
    users.hs_providers.getOne(connection, user_id)
  )(HttpStatus.NOT_FOUND, "User Not Found")();
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  users.hs_providers.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "User Not Found");
