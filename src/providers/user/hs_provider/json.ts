import { IHSProvider } from "@DTO/user/hs_provider";
import { Prisma } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";
import BusinessUser from "../business_user";
import User from "../user";

export namespace Json {
  export const createData = (input: IHSProvider.ICreate) => {
    const now = getISOString();
    return {
      base: {
        create: {
          base: {
            create: User.Json.createData(input)
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
          },
          certification_images: {
            createMany: {
              data: input.business_certification_image_urls.map((url) => ({
                id: randomUUID(),
                url,
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
            is_visible: true,
            created_at: now,
            updated_at: now,
            is_deleted: false,
            deleted_at: null
          }))
        }
      }
    } satisfies Prisma.HSProviderModelCreateInput;
  };

  export const findSummarySelect = () =>
    ({
      id: true,
      base: {
        select: BusinessUser.Json.findSummarySelect()
      }
    } satisfies Prisma.HSProviderModelSelect);

  export const findPublicSelect = () =>
    ({
      id: true,
      business_registration_num: true,
      example_images: {
        where: { is_deleted: false, is_visible: true },
        select: { id: true, url: true, created_at: true, updated_at: true }
      },
      base: {
        select: BusinessUser.Json.findPublicSelect()
      }
    } satisfies Prisma.HSProviderModelSelect);

  export const findPrivateSelect = () =>
    ({
      id: true,
      business_registration_num: true,
      example_images: {
        where: { is_deleted: false },
        select: {
          id: true,
          url: true,
          created_at: true,
          updated_at: true,
          is_visible: true
        }
      },
      base: {
        select: BusinessUser.Json.findPrivateSelect()
      }
    } satisfies Prisma.HSProviderModelSelect);
}
