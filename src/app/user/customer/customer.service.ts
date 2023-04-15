import { ICustomer } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { isNull } from "@UTIL";
import {
  NotFoundException,
  UnprocessableEntityException
} from "@nestjs/common";
import { CustomerInternal } from "./customer.internal";

export namespace CustomerService {
  export const create = async (body: ICustomer.ICreate): Promise<ICustomer> => {
    const customer = CustomerInternal.createCustomer(body);

    await prisma.$transaction([
      prisma.user.create({
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
      prisma.customer.create({
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
    const [customerModel, userModel] = await prisma.$transaction([
      prisma.customer.findFirst({
        where: { id: customer_id }
      }),
      prisma.user.findFirst({ where: { id: customer_id } })
    ]);

    if (isNull(customerModel) || isNull(userModel))
      throw new NotFoundException("User Not Found");

    const customer = CustomerInternal.toCustomer(userModel, customerModel);

    if (isNull(customer))
      throw new UnprocessableEntityException("해당 정보에 이상이 있습니다.");

    return customer;
  };
}
