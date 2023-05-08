import { IBusinessUser } from "@DTO/user/business_user";
import { IHSProvider } from "@DTO/user/hs_provider";
import { isUndefined } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import { getISOString, isActive } from "@UTIL";
import { randomUUID } from "crypto";
import typia from "typia";

export namespace HSProvider {
  export namespace json {
    export const createData = (input: IHSProvider.ICreate) => {
      const now = getISOString();
      return {
        base: {
          create: {
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
            },
            is_verified: false as boolean,
            introduction_title: input.introduction.title,
            introduction_content: input.introduction.content,
            phone: input.phone,
            address_first: input.address.first,
            address_second: input.address.second,
            profile_image_url: input.profile_image_url,
            sub_expertises: {
              createMany: {
                data: input.sub_expertise_ids.map((sub_category_id) => ({
                  id: randomUUID(),
                  sub_category_id,
                  created_at: now,
                  updated_at: now,
                  is_deleted: false,
                  deleted_at: null
                }))
              }
            }
          }
        },
        business_registration_num: input.business_registration_num,
        introduction_images: {
          createMany: {
            data: input.introduction.image_urls.map((url) => ({
              id: randomUUID(),
              url,
              created_at: now,
              updated_at: now,
              is_deleted: false,
              deleted_at: null
            }))
          }
        }
      } satisfies Prisma.HSProviderModelCreateArgs["data"];
    };
    export const findInclude = () =>
      ({
        base: {
          include: {
            base: true,
            sub_expertises: {
              include: { sub_category: { include: { super_category: true } } }
            }
          }
        },
        introduction_images: true
      } satisfies Prisma.HSProviderModelInclude);
    export const findPrivateInclude = () =>
      ({
        base: {
          include: {
            base: {
              include: {
                agreement_acceptances: { include: { agreement: true } }
              }
            },
            sub_expertises: {
              include: { sub_category: { include: { super_category: true } } }
            },
            certification_images: true
          }
        },
        introduction_images: true
      } satisfies Prisma.HSProviderModelInclude);
  }

  export const map = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            include: ReturnType<typeof json.findInclude>;
          }>
        >
      >
    >
  ): IHSProvider => {
    const super_category =
      input.base.sub_expertises.filter(isActive)[0]?.sub_category
        .super_category;
    if (isUndefined(super_category))
      throw Error(`hs-provider: ${input.id} has invalid data`);

    const expertise: IBusinessUser.IExpertise = {
      super_category_id: super_category.id,
      super_category_name: super_category.name,
      sub_categories: input.base.sub_expertises
        .filter(isActive)
        .filter(
          ({ sub_category: { super_category_id } }) =>
            super_category_id === super_category.id
        )
        .map(({ sub_category }) => ({
          sub_category_id: sub_category.id,
          sub_category_name: sub_category.name
        }))
    };
    const provider: IHSProvider = {
      type: "home service provider",
      id: input.id,
      name: input.base.base.name,
      email: input.base.base.email,
      phone: input.base.phone,
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content,
        images: input.introduction_images
          .filter(({ is_deleted }) => !is_deleted)
          .map(({ id, url }) => ({ id, url }))
      },
      business_registration_num: input.business_registration_num,
      expertise,
      address: {
        first: input.base.address_first,
        second: input.base.address_second
      },
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at)
    };
    if (!typia.equals<IHSProvider>(provider))
      throw Error(`hs-provider: ${input.id} has invalid data`);
    return provider;
  };

  export const mapPrivate = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            include: ReturnType<typeof json.findPrivateInclude>;
          }>
        >
      >
    >
  ): IHSProvider.IPrivate => {
    const base = map(input);
    const privateFragment: IBusinessUser.IPrivateFragment = {
      is_verified: input.base.is_verified,
      business_certification_images: input.base.certification_images
        .filter(({ is_deleted }) => !is_deleted)
        .map(({ id, url }) => ({
          id,
          url
        })),
      acceptant_agreements: input.base.base.agreement_acceptances
        .filter(
          ({ is_deleted, agreement }) => !is_deleted && !agreement.is_deleted
        )
        .map(({ agreement: { id, title, content, user_type } }) => ({
          id,
          title,
          content,
          user_type
        }))
    };
    const provider = { ...base, ...privateFragment };
    if (!typia.equals<IHSProvider.IPrivate>(provider))
      throw Error(`hs-provider: ${input.id} has invalid data`);
    return provider;
  };
}
