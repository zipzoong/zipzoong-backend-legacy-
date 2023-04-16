import { ICustomer } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { isNull } from "@UTIL";
import {
  NotFoundException,
  UnprocessableEntityException
} from "@nestjs/common";
import { Customer } from "./customer.core";

export namespace CustomerService {
  export const create = async (body: ICustomer.ICreate): Promise<ICustomer> => {
    const customer = Customer.create(body);

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
          profile_image: customer.profile_image
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

    return customer;
  };

  export const find = async (customer_id: string): Promise<ICustomer> => {
    const [userModel, customerModel] = await prisma.$transaction([
      prisma.userModel.findFirst({ where: { id: customer_id } }),
      prisma.customerModel.findFirst({
        where: { id: customer_id }
      })
    ]);

    if (isNull(userModel) || isNull(customerModel)) {
      throw new NotFoundException("Customer Not Found");
    }
    const customer = Customer.map(userModel, customerModel);

    if (isNull(customer))
      throw new UnprocessableEntityException("Unprocessable Entity");

    return customer;
  };
}
