import { ICustomer } from "@DTO/user/customer";
import { Prisma } from "@PRISMA";
import User from "../user";

export namespace Json {
  export const createData = (input: ICustomer.ICreate) => {
    return {
      birth: input.birth,
      gender: input.gender,
      phone: input.phone,
      profile_image_url: input.profile_image_url,
      address_first: input.address?.first,
      address_second: input.address?.second,
      base: {
        create: User.Json.createData(input)
      }
    } satisfies Prisma.CustomerModelCreateInput;
  };

  export const findSummarySelect = () =>
    ({
      id: true,
      profile_image_url: true,
      base: {
        select: User.Json.findSummarySelect()
      }
    } satisfies Prisma.CustomerModelSelect);

  export const findPublicSelect = () =>
    ({
      id: true,
      profile_image_url: true,
      phone: true,
      address_first: true,
      address_second: true,
      base: {
        select: User.Json.findPublicSelect()
      }
    } satisfies Prisma.CustomerModelSelect);

  export const findPrivateSelect = () =>
    ({
      id: true,
      profile_image_url: true,
      phone: true,
      address_first: true,
      address_second: true,
      birth: true,
      gender: true,
      base: {
        select: User.Json.findPrivateSelect()
      }
    } satisfies Prisma.CustomerModelSelect);
}
