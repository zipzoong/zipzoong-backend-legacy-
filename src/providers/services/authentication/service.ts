import { Authentication, ITokens } from "@DTO/auth";
import { IDateTime, ISoftDeletable } from "@DTO/common";
import { ICustomer, IHSProvider, IREAgent } from "@DTO/user";
import { pipe } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { ForbiddenException } from "@nestjs/common";
import { Prisma } from "@PRISMA";
import { getISOString, isNull, throwIfNull } from "@UTIL";
import { randomUUID } from "crypto";
import { Customer } from "../user/customer";
import { Crypto } from "./crypto";
import { Oauth } from "./oauth";

export namespace AuthenticationService {
  const PermissionDenied = new ForbiddenException("Permission Denied");
  const AccessorInactive = new ForbiddenException("Inactive Accessor");
  const AlreadyCreated = new ForbiddenException("Already Created");

  export const signIn = (input: Authentication.ISignIn): Promise<ITokens> => {
    throw Error();
  };

  export const signUp = (input: Authentication.ISignUp): Promise<ITokens> =>
    pipe(
      input,

      ({ code, oauth_type }) => Oauth[oauth_type](code),

      async ({ oauth_sub, oauth_type, profile }) =>
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

      (model) =>
        Crypto.getAccessorToken({ type: "accessor", accessor_id: model.id }),

      (access_token) => ({ access_token })
    );

  export const getProfile = async (
    accessor_id: string
  ): Promise<Authentication.IProfile> =>
    pipe(
      accessor_id,
      (id) => prisma.oauthAccessorModel.findFirst({ where: { id } }),

      throwIfNull(PermissionDenied),

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
    return "email";
  };

  const getPhone = async (code: string): Promise<string> => {
    return "phone";
  };

  const getAccessor = async (accessor_id: string) =>
    pipe(
      accessor_id,
      (id) =>
        prisma.oauthAccessorModel.findFirst({
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

      throwIfNull(PermissionDenied),

      ({ id, email, phone, customer_id, business_user_id, is_deleted }) => {
        if (is_deleted) throw AccessorInactive;
        return { id, email, phone, customer_id, business_user_id };
      }
    );

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
  ) => {
    const accessor = await getAccessor(accessor_id);

    const email = input.email_access_code
      ? await getEmail(input.email_access_code)
      : accessor.email ?? undefined;

    const phone = input.phone_access_code
      ? await getPhone(input.phone_access_code)
      : accessor.phone ?? undefined;

    if (input.type === "customer") {
      if (!isNull(accessor.customer_id)) throw AlreadyCreated;

      const [customer_id, ...query] = createCustomer(input, { email, phone });
      await prisma.$transaction([
        ...query,
        prisma.oauthAccessorModel.update({
          where: { id: accessor_id },
          data: { customer_id, updated_at: getISOString() }
        })
      ]);
      return;
    }

    if (!isNull(accessor.business_user_id)) throw AlreadyCreated;

    const [business_user_id, ...query] =
      input.type === "real estate agent"
        ? createREAgent(input, { email, phone })
        : createHSProvider(input, { email, phone });

    await prisma.$transaction<Prisma.PrismaPromise<unknown>[]>([
      ...query,
      prisma.oauthAccessorModel.update({
        where: { id: accessor_id },
        data: { business_user_id, updated_at: getISOString() }
      })
    ]);
  };

  const createCustomer = (
    input: ICustomer.ICreateRequest,
    { email, phone }: { email?: string; phone?: string }
  ) => {
    const customer = Customer.create({ ...input, email, phone });

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

  const createREAgent = (
    input: IREAgent.ICreateRequest,
    { email, phone }: { email?: string; phone?: string }
  ) => {
    const agent = {} as IREAgent & IDateTime & ISoftDeletable;

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
      acceptAgreement(agent.id, input.agreement_acceptances)
    ] as const;
  };

  const createHSProvider = (
    input: IHSProvider.ICreateRequest,
    { email, phone }: { email?: string; phone?: string }
  ) => {
    const provider = {} as IHSProvider & IDateTime & ISoftDeletable;
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
      acceptAgreement(provider.id, input.agreement_acceptances)
    ] as const;
  };
}
