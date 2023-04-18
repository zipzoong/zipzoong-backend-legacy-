import { ICustomer } from "@DTO/user";
import { pipe, tap } from "@fxts/core";
import { Customer } from "./customer.core";
import { prisma } from "@INFRA/DB";
import { isNull, toThrow } from "@UTIL";
import { NotFoundException } from "@nestjs/common";
import { Mutation, Query } from "../query";

export namespace CustomerService {
  export const create = (input: ICustomer.ICreate): Promise<ICustomer> =>
    pipe(
      input,

      Customer.create,

      tap(async (customer) => {
        await prisma.$transaction([...Mutation.createCustomer(customer)]);
      })
    );

  export const find = (customer_id: string): Promise<ICustomer> =>
    pipe(
      customer_id,

      (id) => prisma.$transaction([...Query.findCustomer(id)]),

      ([user, customer]) =>
        isNull(customer) || isNull(user)
          ? toThrow(new NotFoundException("Customer Not Found"))
          : ([user, customer] as const),

      Customer.map

      // throwIfNull(new UnprocessableEntityException("Unprocessable Entity"))
    );
}
