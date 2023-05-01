import { Authentication, ITokens } from "@DTO/auth";
import { ICustomer, IHSProvider, IREAgent, IUser } from "@DTO/user";
import { pipe } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import { AgreementUserType, ExpertBusinessType, Prisma } from "@PRISMA";
import { Customer } from "@PROVIDER/cores/customer";
import { HSProvider } from "@PROVIDER/cores/hs_provider";
import { REAgent } from "@PROVIDER/cores/re_agent";
import { getISOString, isNull, isUndefined, throwIfNull, toThrow } from "@UTIL";
import { randomUUID } from "crypto";
import { Crypto } from "./crypto";
import { Oauth } from "./oauth";

export namespace AuthenticationService {
  const AuthenticationFail = new UnauthorizedException("Authentication Fail");
  const AccessorInactive = new ForbiddenException("Inactive Accessor");
  const AlreadyCreated = new ForbiddenException("Already Created");
  const AgreementAcceptanceRequired = new ForbiddenException(
    "Agreement Acceptance Required"
  );
  const PhoneRequired = new BadRequestException("Phone is Required");
  const UserNotFound = new NotFoundException("User Not Found");
  const InvalidExpertise = new BadRequestException("Invalid Expertise");

  export const signIn = ({
    user_type,
    code,
    oauth_type
  }: Authentication.ISignIn): Promise<ITokens> =>
    pipe(
      code,

      (_code) => Oauth[oauth_type](_code),

      async ({ oauth_sub }) =>
        await prisma.oauthAccessorModel.findFirst({
          where: { oauth_sub, oauth_type },
          select: {
            business_user_id: true,
            customer_id: true,
            is_deleted: true,
            deleted_at: true
          }
        }),

      throwIfNull(AuthenticationFail),

      (accessor) =>
        accessor.is_deleted ? toThrow(AccessorInactive) : accessor,

      (accessor) => {
        switch (user_type) {
          case "customer":
            if (isNull(accessor.customer_id)) throw UserNotFound;
            return accessor.customer_id;
          case "home service provider":
          case "real estate agent":
            if (isNull(accessor.business_user_id)) throw UserNotFound;
            return accessor.business_user_id;
          default:
            throw Error("unreachable case");
        }
      },
      (user_id) => Crypto.getUserToken({ type: "user", user_id, user_type }),

      (access_token) => ({ access_token })
    );

  export const signUp = ({
    code,
    oauth_type
  }: Authentication.ISignUp): Promise<ITokens> =>
    pipe(
      code,

      (_code) => Oauth[oauth_type](_code),

      async ({ oauth_sub, profile }) =>
        (await prisma.oauthAccessorModel.findFirst({
          where: { oauth_sub, oauth_type }
        })) ??
        (await prisma.oauthAccessorModel.create({
          data: {
            id: randomUUID(),
            oauth_sub,
            oauth_type,
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
            profile_image_url: profile.profile_image_url,
            birth: profile.birth,
            gender: profile.gender,
            address_first: profile.address?.first,
            address_second: profile.address?.second,
            created_at: getISOString(),
            updated_at: getISOString(),
            is_deleted: false,
            deleted_at: null
          }
        })),

      (model) => (model.is_deleted ? toThrow(AccessorInactive) : model),

      (model) =>
        Crypto.getAccessorToken({ type: "accessor", accessor_id: model.id }),

      (access_token) => ({ access_token })
    );

  export const getProfile = async (
    accessor_id: string
  ): Promise<Authentication.IProfile> =>
    pipe(
      accessor_id,

      async (id) =>
        await prisma.oauthAccessorModel.findFirst({ where: { id } }),

      throwIfNull(AuthenticationFail),

      (model) => {
        if (model.is_deleted) throw AccessorInactive;
        return model;
      },

      ({
        name,
        email,
        phone,
        profile_image_url,
        birth,
        gender,
        address_first,
        address_second
      }) => ({
        name,
        email,
        phone,
        profile_image_url,
        birth,
        gender,
        address: address_first
          ? {
              first: address_first,
              second: address_second
            }
          : null
      })
    );

  const getEmail = async (code: string): Promise<string> => {
    return `${code}@test.com`;
  };

  const getPhone = async (code: string): Promise<string> => {
    return code;
  };

  const getAccessor = (accessor_id: string) =>
    pipe(
      accessor_id,
      async (id) =>
        await prisma.oauthAccessorModel.findFirst({
          where: { id },
          select: {
            id: true,
            email: true,
            phone: true,
            customer_id: true,
            business_user_id: true,
            is_deleted: true,
            deleted_at: true
          }
        }),

      throwIfNull(AuthenticationFail),

      ({ id, email, phone, customer_id, business_user_id, is_deleted }) => {
        if (is_deleted) throw AccessorInactive;
        return { id, email, phone, customer_id, business_user_id };
      }
    );

  const checkAgreement = async (
    user_type: IUser.Type,
    agreement_ids: string[]
  ) => {
    const or: AgreementUserType[] = ["all"];
    if (user_type === "customer") or.push("customer");
    else if (user_type === "real estate agent") or.push("business", "RE");
    else if (user_type === "home service provider") or.push("business", "HS");
    const unchecked_agreements = (
      await prisma.agreementModel.findMany({
        select: { id: true, is_deleted: true },
        where: { user_type: { in: or } }
      })
    )
      .filter(({ is_deleted }) => !is_deleted)
      .filter(({ id }) => !!agreement_ids.find((_id) => _id === id));
    if (unchecked_agreements.length > 0) throw AgreementAcceptanceRequired;
    return;
  };

  const acceptAgreement = (user_id: string, ids: string[]) => {
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

  export const createUser = async (
    accessor_id: string,
    input: Authentication.ICreateRequest
  ): Promise<void> => {
    await checkAgreement(input.type, input.agreement_acceptances);

    const isCustomer = input.type === "customer";
    const isREAgent = input.type === "real estate agent";
    const isHSProvider = input.type === "home service provider";

    const isBusinessUser = isREAgent || isHSProvider;

    if (isREAgent) await checkSuperExpertise("RE", input.super_expertise_id);
    if (isHSProvider) await checkSuperExpertise("HS", input.super_expertise_id);

    const accessor = await getAccessor(accessor_id);

    const email = input.email_access_code
      ? await getEmail(input.email_access_code)
      : accessor.email ?? undefined;

    const phone = input.phone_access_code
      ? await getPhone(input.phone_access_code)
      : accessor.phone ?? undefined;

    const CustomerExisted = !isNull(accessor.customer_id);
    const BusinessUserExisted = !isNull(accessor.business_user_id);

    if (
      (isCustomer && CustomerExisted) ||
      (isBusinessUser && BusinessUserExisted)
    )
      throw AlreadyCreated;

    const [user_id, ...queries] = ((_input: Authentication.ICreateRequest) => {
      switch (_input.type) {
        case "customer":
          return createCustomer({ ..._input, email, phone });
        case "real estate agent":
          if (isUndefined(phone)) throw PhoneRequired;
          return createREAgent({ ..._input, email, phone });
        case "home service provider":
          if (isUndefined(phone)) throw PhoneRequired;
          return createHSProvider({ ..._input, email, phone });
        default:
          throw Error("unreachable case");
      }
    })(input);

    await prisma.$transaction<Prisma.PrismaPromise<unknown>[]>([
      ...queries,
      prisma.oauthAccessorModel.update({
        where: { id: accessor_id },
        data: {
          ...(isCustomer ? { customer_id: user_id } : {}),
          ...(isBusinessUser ? { business_user_id: user_id } : {}),
          updated_at: getISOString()
        }
      })
    ]);
    return;
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
      acceptAgreement(customer.id, input.agreement_acceptances)
    ] as const;
  };

  const saveCertification = (business_user_id: string, urls: string[]) => {
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

  const checkSuperExpertise = async (
    business_type: ExpertBusinessType,
    id: string
  ) => {
    const category = await prisma.expertSuperCategoryModel.findFirst({
      where: { id }
    });
    if (
      isNull(category) ||
      category.is_deleted ||
      category.business_type !== business_type
    )
      throw InvalidExpertise;
  };

  const checkSubExpertise = async () => {};

  const saveSuperExpertise = (
    business_user_id: string,
    expertise_id: string
  ) => {
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
      saveCertification(agent.id, input.business_certifications),
      saveSuperExpertise(agent.id, input.super_expertise_id),
      acceptAgreement(agent.id, input.agreement_acceptances)
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
      saveCertification(provider.id, input.business_certifications),
      prisma.hSIntroductionImageModel.createMany({
        data: provider.introduction.images.map((image) => ({
          ...image,
          hs_provider_id: provider.id,
          is_deleted: false,
          created_at: now,
          updated_at: now,
          deleted_at: null
        }))
      }),
      saveSuperExpertise(provider.id, input.super_expertise_id),
      acceptAgreement(provider.id, input.agreement_acceptances)
    ] as const;
  };
}
