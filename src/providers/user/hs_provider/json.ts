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
    } satisfies Prisma.HSProviderModelCreateInput;
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
