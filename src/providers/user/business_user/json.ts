import { Prisma } from "@PRISMA";
import User from "../user";

export namespace Json {
  export const findExpertiseSelect = () =>
    ({
      is_deleted: true,
      sub_category: {
        select: { id: true, name: true, super_category: true }
      }
    } satisfies Prisma.SubExpertiseModelSelect);
  export const findSummarySelect = () =>
    ({
      profile_image_url: true,
      introduction_title: true,
      introduction_content: true,
      address_first: true,
      address_second: true,
      review_stats: true,
      sub_expertises: {
        select: findExpertiseSelect()
      },
      base: {
        select: User.Json.findSummarySelect()
      }
    } satisfies Prisma.BusinessUserModelSelect);

  export const findPublicSelect = () =>
    ({
      is_verified: true,
      phone: true,
      profile_image_url: true,
      introduction_title: true,
      introduction_content: true,
      address_first: true,
      address_second: true,
      review_stats: true,
      sub_expertises: {
        select: findExpertiseSelect()
      },
      base: {
        select: User.Json.findPublicSelect()
      }
    } satisfies Prisma.BusinessUserModelSelect);

  export const findPrivateSelect = () =>
    ({
      certification_images: true,
      is_verified: true,
      phone: true,
      profile_image_url: true,
      introduction_title: true,
      introduction_content: true,
      address_first: true,
      address_second: true,
      review_stats: true,
      sub_expertises: {
        select: findExpertiseSelect()
      },
      base: {
        select: User.Json.findPrivateSelect()
      }
    } satisfies Prisma.BusinessUserModelSelect);
}
