import { IBusinessUser } from "@DTO/user/business_user";
import { IHSProvider } from "@DTO/user/hs_provider";
import { prisma } from "@INFRA/DB";
import { getISOString, isActive } from "@UTIL";
import typia from "typia";
import BusinessUser from "../business_user";
import User from "../user";
import { Json } from "./json";

export namespace Map {
  export const entity = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            select: ReturnType<typeof Json.findSelect>;
          }>
        >
      >
    >
  ): IHSProvider => {
    const expertise = BusinessUser.Map.expertise(input.base.sub_expertises);

    const provider: IHSProvider = {
      type: "home service provider",
      id: input.id,
      name: input.base.base.name,
      email: input.base.base.email,
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at),
      phone: input.base.phone,
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content
      },
      expertise,
      review_stats: BusinessUser.Map.reviewStats(input.base),
      address: {
        first: input.base.address_first,
        second: input.base.address_second
      },
      business_registration_num: input.business_registration_num,
      example_images: input.example_images
        .filter(isActive)
        .map(({ id, url }) => ({ id, url }))
    };
    if (!typia.equals<IHSProvider>(provider))
      throw Error(`hs-provider: ${input.id} has invalid data`);
    return provider;
  };

  export const summaryEntity = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            select: ReturnType<typeof Json.findSummarySelect>;
          }>
        >
      >
    >
  ): IHSProvider.ISummary => ({
    type: "home service provider",
    id: input.id,
    name: input.base.base.name,
    profile_image_url: input.base.profile_image_url,
    introduction: {
      title: input.base.introduction_title,
      content: input.base.introduction_content
    },
    address: {
      first: input.base.address_first,
      second: input.base.address_second
    },
    review_stats: BusinessUser.Map.reviewStats(input.base),
    expertise: BusinessUser.Map.expertise(input.base.sub_expertises)
  });

  export const privateEntity = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            select: ReturnType<typeof Json.findPrivateSelect>;
          }>
        >
      >
    >
  ): IHSProvider.IPrivate => {
    const base = entity(input);
    const privateFragment: IBusinessUser.IPrivateFragment = {
      is_verified: input.base.is_verified,
      business_certification_images: BusinessUser.Map.certificationImages(
        input.base.certification_images
      ),
      acceptant_agreements: User.Map.accepatantAgreements(
        input.base.base.agreement_acceptances
      )
    };
    const provider: IHSProvider.IPrivate = { ...base, ...privateFragment };

    if (!typia.equals<IHSProvider.IPrivate>(provider))
      throw Error(`hs-provider: ${input.id} has invalid data`);
    return provider;
  };
}
