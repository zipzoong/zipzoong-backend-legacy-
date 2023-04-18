import { ICustomer } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { isNull, throwIfNull, toThrow } from "@UTIL";
import {
  NotFoundException,
  UnprocessableEntityException
} from "@nestjs/common";
import { Customer } from "./customer.core";
import { pipe, tap } from "@fxts/core";

export namespace CustomerService {
  export const create = (body: ICustomer.ICreate): Promise<ICustomer> =>
    pipe(
      body,
      Customer.create,
      tap(async (customer) => {
        await prisma.$transaction([
          prisma.userModel.create({
            data: {
              id: customer.id,
              name: customer.name,
              email: customer.email,
              // email is nullish or email_verified is nullish
              email_verified: customer.email_verified,
              phone: customer.phone,
              // phone is nullish or phone_verified is nullish
              phone_verified: customer.phone_verified,
              address_first: customer.address_first,
              address_second: customer.address_second,
              profile_image_url: customer.profile_image_url
            }
          }),
          prisma.customerModel.create({
            data: {
              id: customer.id,
              birth: customer.birth,
              gender: customer.gender
            }
          })
        ]);
      })
    );

  export const find = (customer_id: string): Promise<ICustomer> =>
    pipe(
      customer_id,

      (id) =>
        prisma.$transaction([
          prisma.customerModel.findFirst({ where: { id } }),
          prisma.userModel.findFirst({ where: { id } })
        ]),

      ([customer, user]) =>
        isNull(user) || isNull(customer)
          ? toThrow(new NotFoundException("Customer Not Found"))
          : ([user, customer] as const),

      Customer.map,

      throwIfNull(new UnprocessableEntityException("Unprocessable Entity"))
    );
}
