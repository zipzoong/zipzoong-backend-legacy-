import { IHSProvider } from "@DTO/user/hs_provider";
import { Prisma } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace Json {
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
      example_images: {
        createMany: {
          data: input.example_image_urls.map((url) => ({
            id: randomUUID(),
            url,
            created_at: now,
            updated_at: now,
            is_deleted: false,
            deleted_at: null
          }))
        }
      }
    } satisfies Prisma.HSProviderModelCreateInput;
  };
  export const findSelect = () =>
    ({
      id: true,
      business_registration_num: true,
      example_images: true,
      base: {
        select: {
          is_verified: true,
          introduction_title: true,
          introduction_content: true,
          phone: true,
          address_first: true,
          address_second: true,
          profile_image_url: true,
          review_stats: true,
          sub_expertises: {
            select: {
              is_deleted: true,
              sub_category: {
                select: { id: true, name: true, super_category: true }
              }
            }
          },
          base: {
            select: {
              created_at: true,
              updated_at: true,
              is_deleted: true,
              deleted_at: true,
              name: true,
              email: true
            }
          }
        }
      }
    } satisfies Prisma.HSProviderModelSelect);

  export const findPrivateSelect = () =>
    ({
      id: true,
      business_registration_num: true,
      example_images: true,
      base: {
        select: {
          phone: true,
          is_verified: true,
          address_first: true,
          address_second: true,
          profile_image_url: true,
          introduction_title: true,
          introduction_content: true,
          review_stats: true,
          certification_images: true,
          sub_expertises: {
            select: {
              is_deleted: true,
              sub_category: {
                select: { id: true, name: true, super_category: true }
              }
            }
          },
          base: {
            select: {
              created_at: true,
              updated_at: true,
              is_deleted: true,
              deleted_at: true,
              name: true,
              email: true,
              agreement_acceptances: {
                select: {
                  created_at: true,
                  updated_at: true,
                  is_deleted: true,
                  deleted_at: true,
                  agreement: true
                }
              }
            }
          }
        }
      }
    } satisfies Prisma.HSProviderModelSelect);

  export const findSummarySelect = () =>
    ({
      id: true,
      base: {
        select: {
          introduction_title: true,
          introduction_content: true,
          address_first: true,
          address_second: true,
          profile_image_url: true,
          review_stats: true,
          sub_expertises: {
            select: {
              is_deleted: true,
              sub_category: {
                select: { id: true, name: true, super_category: true }
              }
            }
          },
          base: {
            select: {
              is_deleted: true,
              deleted_at: true,
              name: true
            }
          }
        }
      }
    } satisfies Prisma.HSProviderModelSelect);
}
