import { IBusinessUser } from "@DTO/user/business_user";
import { IHSProvider } from "@DTO/user/hs_provider";
import { prisma } from "@INFRA/DB";
import { getISOString, isActive } from "@UTIL";
import typia from "typia";
import BusinessUser from "../business_user";
import { Json } from "./json";

export namespace Map {
  export const hSProvider = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            include: ReturnType<typeof Json.findInclude>;
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

  export const privateHSProvider = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            include: ReturnType<typeof Json.findPrivateInclude>;
          }>
        >
      >
    >
  ): IHSProvider.IPrivate => {
    const base = hSProvider(input);
    const privateFragment: IBusinessUser.IPrivateFragment = {
      is_verified: input.base.is_verified,
      business_certification_images: input.base.certification_images
        .filter(({ is_deleted }) => !is_deleted)
        .map(({ id, url }) => ({
          id,
          url
        })),
      acceptant_agreements: input.base.base.agreement_acceptances
        .filter(isActive)
        .filter(({ agreement }) => isActive(agreement))
        .map(
          ({ agreement: { id, title, content, user_type, is_required } }) => ({
            id,
            title,
            content,
            user_type,
            is_required
          })
        )
    };
    const provider = { ...base, ...privateFragment };
    if (!typia.equals<IHSProvider.IPrivate>(provider))
      throw Error(`hs-provider: ${input.id} has invalid data`);
    return provider;
  };
}
