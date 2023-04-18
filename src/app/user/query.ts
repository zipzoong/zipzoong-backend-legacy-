import {
  IBusinessUser,
  ICustomer,
  IHSCompany,
  IREAgent,
  IUser
} from "@DTO/user";
import { prisma } from "@INFRA/DB";

export namespace Mutation {
  export const createUser = (input: IUser) =>
    [
      prisma.userModel.create({
        data: {
          id: input.id,
          name: input.name,
          phone: input.phone,
          created_at: input.created_at,
          email: input.email?.email ?? null,
          email_verified: input.email?.is_verified ?? false
        }
      })
    ] as const;

  export const createCustomer = (input: ICustomer) =>
    [
      ...createUser(input),
      prisma.customerModel.create({
        data: {
          id: input.id,
          profile_image_url: input.profile_image_url,
          gender: input.gender,
          birth: input.birth,
          address_first: input.address?.first ?? null,
          address_second: input.address?.second ?? null
        }
      })
    ] as const;

  export const createBusinessUser = (input: IBusinessUser) =>
    [
      ...createUser(input),
      prisma.businessUserModel.create({
        data: {
          id: input.id,
          profile_image_url: input.profile_image_url,
          introduction_title: input.introduction.title,
          introduction_content: input.introduction.content
        }
      })
    ] as const;

  export const createREAgent = (input: IREAgent) =>
    [
      ...createBusinessUser(input),
      prisma.rEAgentModel.create({
        data: {
          id: input.id,
          is_licensed: input.is_licensed,
          re_num: input.real_estate.num,
          re_name: input.real_estate.name,
          re_phone: input.real_estate.phone,
          re_licensed_agent_name: input.real_estate.licensed_agent_name,
          re_address_first: input.real_estate.address.first,
          re_address_second: input.real_estate.address.second ?? null
        }
      })
    ] as const;

  export const createHSCompany = (input: IHSCompany) =>
    [
      ...createBusinessUser(input),
      prisma.hSCompanyModel.create({
        data: {
          id: input.id,
          business_num: input.business_num,
          address_first: input.address.first,
          address_second: input.address.second ?? undefined
        }
      })
    ] as const;
}

export namespace Query {
  export const findUser = (id: string) =>
    [prisma.userModel.findFirst({ where: { id } })] as const;

  export const findCustomer = (id: string) =>
    [
      ...findUser(id),
      prisma.customerModel.findFirst({ where: { id } })
    ] as const;

  export const findBusinessUser = (id: string) =>
    [
      ...findUser(id),
      prisma.businessUserModel.findFirst({ where: { id } })
    ] as const;

  export const findREAgent = (id: string) =>
    [
      ...findBusinessUser(id),
      prisma.rEAgentModel.findFirst({ where: { id } })
    ] as const;

  export const findHSCompany = (id: string) =>
    [
      ...findBusinessUser(id),
      prisma.hSCompanyModel.findFirst({ where: { id } }),
      prisma.hSCompanyIntroductionImageModel.findMany({
        where: { company_id: id }
      })
    ] as const;
}
