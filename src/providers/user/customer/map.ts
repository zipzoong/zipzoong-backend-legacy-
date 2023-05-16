import { ICustomer } from "@DTO/user/customer";
import { prisma } from "@INFRA/DB";
import { getISOString, isActive, isNull } from "@UTIL";
import typia from "typia";
import { Json } from "./json";

export namespace Map {
  export const customer = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.customerModel.findFirst<{
            include: ReturnType<typeof Json.findInclude>;
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

  export const privateCustomer = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.customerModel.findFirst<{
            include: ReturnType<typeof Json.findPrivateInclude>;
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
        .filter(isActive)
        .filter(({ agreement }) => isActive(agreement))
        .map(
          ({ agreement: { id, title, content, user_type, is_required } }) => ({
            id,
            title,
            content,
            user_type,
            is_required
          })
        ),
      created_at: getISOString(input.base.created_at),
      updated_at: getISOString(input.base.updated_at)
    };
    if (!typia.equals<ICustomer.IPrivate>(customer))
      throw Error(`customer: ${input.id} has invalid data`);
    return customer;
  };
}
