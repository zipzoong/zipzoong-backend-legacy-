import { Authentication } from "@DTO/auth";
import { ICustomer, IHSProvider, IREAgent } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { BadRequestException } from "@nestjs/common";
import { Customer } from "@PROVIDER/cores/user/customer";
import { HSProvider } from "@PROVIDER/cores/user/hs_provider";
import { REAgent } from "@PROVIDER/cores/user/re_agent";
import { getISOString, isUndefined, toThrow } from "@UTIL";
import { randomUUID } from "crypto";

export namespace AuthenticationQueryBuilder {
  const PhoneRequired = new BadRequestException("Phone Required");

  const saveAgreementAcceptances = ({
    user_id,
    ids
  }: {
    user_id: string;
    ids: string[];
  }) => {
    const now = getISOString();
    return prisma.agreementAcceptanceModel.createMany({
      data: ids.map((agreement_id) => ({
        id: randomUUID(),
        user_id,
        agreement_id,
        created_at: now,
        updated_at: now,
        is_deleted: false,
        deleted_at: null
      }))
    });
  };

  const saveSuperExpertise = ({
    business_user_id,
    expertise_id
  }: {
    business_user_id: string;
    expertise_id: string;
  }) => {
    const now = getISOString();
    return prisma.superExpertiseModel.create({
      data: {
        id: randomUUID(),
        super_category_id: expertise_id,
        business_user_id,
        created_at: now,
        updated_at: now
      }
    });
  };

  const saveSubExpertises = ({
    business_user_id,
    expertise_ids
  }: {
    business_user_id: string;
    expertise_ids: string[];
  }) => {
    const now = getISOString();
    return prisma.subExpertiseModel.createMany({
      data: expertise_ids.map((sub_category_id) => ({
        id: randomUUID(),
        business_user_id,
        sub_category_id,
        is_deleted: false,
        created_at: now,
        updated_at: now,
        deleted_at: null
      }))
    });
  };

  const saveCertification = ({
    business_user_id,
    urls
  }: {
    business_user_id: string;
    urls: string[];
  }) => {
    const now = getISOString();
    return prisma.businessCertificationModel.createMany({
      data: urls.map((image_url) => ({
        id: randomUUID(),
        business_user_id,
        image_url,
        is_deleted: false,
        created_at: now,
        updated_at: now,
        deleted_at: null
      }))
    });
  };

  const createCustomer = (
    input: ICustomer.ICreateRequest & { email?: string; phone?: string }
  ) => {
    const customer = Customer.create(input);

    return [
      customer.id,
      prisma.userModel.create({
        data: {
          id: customer.id,
          name: customer.name,
          email: customer.email,
          is_deleted: customer.is_deleted,
          created_at: customer.created_at,
          updated_at: customer.updated_at,
          deleted_at: customer.deleted_at
        }
      }),
      prisma.customerModel.create({
        data: {
          id: customer.id,
          phone: customer.phone,
          birth: customer.birth,
          gender: customer.gender,
          profile_image_url: customer.profile_image_url,
          address_first: customer.address?.first,
          address_second: customer.address?.second
        }
      }),
      // user create
      saveAgreementAcceptances({
        user_id: customer.id,
        ids: input.agreement_acceptances
      })
      // accept agreements
    ] as const;
  };

  const createREAgent = (
    input: IREAgent.ICreateRequest & { email?: string; phone: string }
  ) => {
    const agent = REAgent.create(input);

    return [
      agent.id,
      prisma.userModel.create({
        data: {
          id: agent.id,
          name: agent.name,
          email: agent.email,
          is_deleted: agent.is_deleted,
          created_at: agent.created_at,
          updated_at: agent.updated_at,
          deleted_at: agent.deleted_at
        }
      }),
      prisma.businessUserModel.create({
        data: {
          id: agent.id,
          phone: agent.phone,
          profile_image_url: agent.profile_image_url,
          address_first: agent.real_estate.address.first,
          address_second: agent.real_estate.address.second,
          is_verified: false,
          introduction_title: agent.introduction.title,
          introduction_content: agent.introduction.content
        }
      }),
      prisma.rEAgentModel.create({
        data: {
          id: agent.id,
          is_licensed: agent.is_licensed,
          re_num: agent.real_estate.num,
          re_name: agent.real_estate.name,
          re_phone: agent.real_estate.phone,
          re_licensed_agent_name: agent.real_estate.licensed_agent_name
        }
      }),
      // user create
      saveAgreementAcceptances({
        user_id: agent.id,
        ids: input.agreement_acceptances
      }),
      // accept agreements
      saveCertification({
        business_user_id: agent.id,
        urls: input.business_certifications
      }),
      // save certification
      saveSuperExpertise({
        business_user_id: agent.id,
        expertise_id: input.super_expertise_id
      }),
      // save super expertise
      saveSubExpertises({
        business_user_id: agent.id,
        expertise_ids: input.sub_expertise_ids
      })
      // save sub expertises
    ] as const;
  };

  const createHSProvider = (
    input: IHSProvider.ICreateRequest & { email?: string; phone: string }
  ) => {
    const provider = HSProvider.create(input);
    const now = getISOString();
    return [
      provider.id,
      prisma.userModel.create({
        data: {
          id: provider.id,
          name: provider.name,
          email: provider.email,
          is_deleted: provider.is_deleted,
          created_at: provider.created_at,
          updated_at: provider.updated_at,
          deleted_at: provider.deleted_at
        }
      }),
      prisma.businessUserModel.create({
        data: {
          id: provider.id,
          phone: provider.phone,
          profile_image_url: provider.profile_image_url,
          address_first: provider.address.first,
          address_second: provider.address.second,
          is_verified: false,
          introduction_title: provider.introduction.title,
          introduction_content: provider.introduction.content
        }
      }),
      prisma.hSProviderModel.create({
        data: {
          id: provider.id,
          business_registration_num: provider.business_registration_num
        }
      }),
      // user create
      saveAgreementAcceptances({
        user_id: provider.id,
        ids: input.agreement_acceptances
      }),
      // accept agreements
      saveCertification({
        business_user_id: provider.id,
        urls: input.business_certifications
      }),
      // save certification
      saveSuperExpertise({
        business_user_id: provider.id,
        expertise_id: input.super_expertise_id
      }),
      // save super expertise
      saveSubExpertises({
        business_user_id: provider.id,
        expertise_ids: input.sub_expertise_ids
      }),
      // save sub expertises
      prisma.hSIntroductionImageModel.createMany({
        data: provider.introduction.images.map(({ id, image_url }) => ({
          id,
          image_url,
          hs_provider_id: provider.id,
          is_deleted: false,
          created_at: now,
          updated_at: now,
          deleted_at: null
        }))
      })
      // save introduction images
    ] as const;
  };

  /** @throw BadRequest */
  export const createUser = (
    input: Authentication.ICreateRequest & {
      email?: string;
      phone?: string;
    }
  ) => {
    const { type, phone } = input;
    if (type === "customer") return createCustomer(input);
    if (type === "home service provider")
      return isUndefined(phone)
        ? toThrow(PhoneRequired)
        : createHSProvider({ ...input, phone });
    if (type === "real estate agent")
      return isUndefined(phone)
        ? toThrow(PhoneRequired)
        : createREAgent({ ...input, phone });

    throw Error("[QueryBuild.createUser] unreachable case");
  };
}
