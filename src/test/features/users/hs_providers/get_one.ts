import { IHSProvider } from "@DTO/user/hs_provider";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { HSProvider } from "@PROVIDER/cores/user/hs_provider";
import { agreements, expert_super_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.hs_providers.getOne");

export const test_success = async (connection: IConnection) => {
  const input = typia.random<IHSProvider.ICreate>();
  input.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);

  const list = await expert_super_categories.getList(connection, {
    filter: ["HS"]
  });
  const super_expertise = RandomGenerator.pick(list);

  input.super_expertise_id = super_expertise.id;
  input.sub_expertise_ids = super_expertise.sub_categories.map(({ id }) => id);

  const data = HSProvider.json.createData(input);
  data.base.create.is_verified = true;
  const { id } = await prisma.hSProviderModel.create({ data });

  const received = await users.hs_providers.getOne(connection, id);

  typia.assertEquals(received);
};

export const test_not_found_if_unverified = async (connection: IConnection) => {
  const input = typia.random<IHSProvider.ICreate>();
  input.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);

  const list = await expert_super_categories.getList(connection, {
    filter: ["HS"]
  });
  const super_expertise = RandomGenerator.pick(list);

  input.super_expertise_id = super_expertise.id;
  input.sub_expertise_ids = super_expertise.sub_categories.map(({ id }) => id);

  const data = HSProvider.json.createData(input);
  const { id } = await prisma.hSProviderModel.create({ data });

  await internal.test_error(() => users.hs_providers.getOne(connection, id))(
    HttpStatus.NOT_FOUND,
    "User Not Found"
  )();
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  users.hs_providers.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "User Not Found");
