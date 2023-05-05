import { ICustomer } from "@DTO/user/customer";
import { prisma } from "@INFRA/DB";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import { Customer } from "@PROVIDER/cores/user/customer";
import { agreements, users } from "@SDK";
import { internal } from "@TEST/internal";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.customers.getOne");

export const test_success = async (connection: IConnection) => {
  const input = typia.random<ICustomer.ICreate>();
  input.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      filter: ["all", "customer"]
    })
  ).map(({ id }) => id);

  const data = Customer.json.createData(input);
  data.phone = "required";
  const { id } = await prisma.customerModel.create({ data });

  const received = await users.customers.getOne(connection, id);

  typia.assertEquals(received);
};

export const test_not_found_if_unverified = async (connection: IConnection) => {
  const input = typia.random<ICustomer.ICreate>();
  input.acceptant_agreement_ids = (
    await agreements.getList(connection, {
      filter: ["all", "customer"]
    })
  ).map(({ id }) => id);

  const data = Customer.json.createData(input);
  data.phone = null;
  const { id } = await prisma.customerModel.create({ data });

  await internal.test_error(() => users.customers.getOne(connection, id))(
    HttpStatus.NOT_FOUND,
    "User Not Found"
  )();
};

export const test_not_found = internal.test_error((connection: IConnection) =>
  users.customers.getOne(connection, randomUUID())
)(HttpStatus.NOT_FOUND, "User Not Found");
