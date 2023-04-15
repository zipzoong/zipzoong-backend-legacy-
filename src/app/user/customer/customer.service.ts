import { ICustomer, IUser } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { Customer, User } from "@PRISMA";
import { isNull } from "@UTIL";
import {
  NotFoundException,
  UnprocessableEntityException
} from "@nestjs/common";
import { randomUUID } from "crypto";
import typia from "typia";

const createUser = (input: IUser.ICreate): IUser.IBase => {
  const {
    user_type,
    name,
    email,
    email_verified,
    phone,
    phone_verified,
    address_first,
    address_second,
    profile_image
  } = input;

  return {
    user_type,
    id: randomUUID(),
    name: name ?? "",
    email: email ?? null,
    // email is nullish or email_verified is nullish
    email_verified:
      email == null || email_verified == null ? false : email_verified,
    phone: phone ?? null,
    // phone is nullish or phone_verified is nullish
    phone_verified:
      phone == null || phone_verified == null ? false : phone_verified,
    address_first: address_first ?? null,
    address_second:
      address_first == null || address_second == null ? null : address_second,
    profile_image: profile_image ?? null
  };
};

const createCustomer = (input: ICustomer.ICreate): ICustomer => {
  const user = createUser(input);
  return {
    ...user,
    user_type: "customer",
    birth: input.birth ?? null,
    gender: input.gender ?? null
  };
};

/**
 * 만약 customer object를 생성할 수 없으면 null을 반환한다.
 */
const toCustomer = (user: User, customer: Customer): ICustomer | null => {
  const union = {
    ...user,
    ...customer,
    user_type: "customer"
  };
  return typia.is<ICustomer>(union) ? union : null;
};

export namespace CustomerService {
  export const create = async (body: ICustomer.ICreate): Promise<ICustomer> => {
    const customer = createCustomer(body);

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

    const customer = toCustomer(userModel, customerModel);

    if (isNull(customer))
      throw new UnprocessableEntityException("해당 정보에 이상이 있습니다.");

    return customer;
  };
}
