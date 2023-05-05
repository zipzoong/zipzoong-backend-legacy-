import { ICustomer } from "@DTO/user/customer";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import { getISOString, isNull } from "@UTIL";
import { randomUUID } from "crypto";
import typia from "typia";

export namespace Customer {
  export namespace json {
    export const createData = (input: ICustomer.ICreate) => {
      const now = getISOString();
      return {
        birth: input.birth,
        gender: input.gender,
        phone: input.phone,
        profile_image_url: input.profile_image_url,
        address_first: input.address?.first,
        address_second: input.address?.second,
        base: {
          create: {
            id: randomUUID(),
            name: input.name,
            email: input.email,
            created_at: now,
            updated_at: now,
            is_deleted: false,
            deleted_at: null,
            agreement_acceptances: {
              createMany: {
                data: input.acceptant_agreement_ids.map((agreement_id) => ({
                  id: randomUUID(),
                  agreement_id,
                  created_at: now,
                  updated_at: now,
                  is_deleted: false,
                  deleted_at: null
                }))
              }
            }
          }
        }
      } satisfies Prisma.CustomerModelCreateArgs["data"];
    };
    export const findInclude = () =>
      ({
        base: true
      } satisfies Prisma.CustomerModelInclude);
    export const findPrivateInclude = () =>
      ({
        base: {
          include: {
            agreement_acceptances: { include: { agreement: true } }
          }
        }
      } satisfies Prisma.CustomerModelInclude);
  }

  export const map = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.customerModel.findFirst<{
            include: ReturnType<typeof json.findInclude>;
          }>
        >
      >
    >
  ): ICustomer => {
    // 논리적으로 phone정보가 없는 사용자는 map함수인자로 전달되지 않게 구현해야 한다.
    // 해당 에러가 발생하는 경우는, 비정상적인 경우다.
    if (isNull(input.phone)) throw Error("Unverified Customer");
    const customer: ICustomer = {
      type: "customer",
      id: input.id,
      name: input.base.name,
      email: input.base.email,
      phone: input.phone,
      profile_image_url: input.profile_image_url,
      address: input.address_first
        ? {
            first: input.address_first,
            second: input.address_second
          }
        : null,
      gender: input.gender,
      birth: input.birth,
      created_at: getISOString(input.base.created_at),
      updated_at: getISOString(input.base.updated_at)
    };
    if (!typia.equals<ICustomer>(customer))
      throw Error(`customer: ${input.id} has invalid data`);

    return customer;
  };

  export const mapPrivate = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.customerModel.findFirst<{
            include: ReturnType<typeof json.findPrivateInclude>;
          }>
        >
      >
    >
  ): ICustomer.IPrivate => {
    const customer: ICustomer.IPrivate = {
      type: "customer",
      id: input.id,
      name: input.base.name,
      email: input.base.email,
      phone: input.phone,
      profile_image_url: input.profile_image_url,
      address: input.address_first
        ? {
            first: input.address_first,
            second: input.address_second
          }
        : null,
      gender: input.gender,
      birth: input.birth,
      acceptant_agreements: input.base.agreement_acceptances
        .filter(
          ({ is_deleted, agreement }) => !is_deleted && !agreement.is_deleted
        )
        .map(({ agreement: { id, title, content, user_type } }) => ({
          id,
          title,
          content,
          user_type
        })),
      created_at: getISOString(input.base.created_at),
      updated_at: getISOString(input.base.updated_at)
    };
    if (!typia.equals<ICustomer.IPrivate>(customer))
      throw Error(`customer: ${input.id} has invalid data`);
    return customer;
  };
}
