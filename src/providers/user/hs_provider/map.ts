import { IResult } from "@TYPE";
import { IHSProvider } from "@DTO/user/hs_provider";
import { prisma } from "@INFRA/DB";
import { getISOString, Result } from "@UTIL";
import typia from "typia";
import BusinessUser from "../business_user";
import User from "../user";
import { Json } from "./json";

export namespace Map {
  export const entitySummary = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            select: ReturnType<typeof Json.findSummarySelect>;
          }>
        >
      >
    >
  ): IResult<IHSProvider.ISummary, null> => {
    const provider: IHSProvider.ISummary = {
      type: "home service provider",
      mode: "summary",
      id: input.id,
      name: input.base.base.name,
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at),
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content
      },
      address: {
        first: input.base.address_first,
        second: input.base.address_second
      },
      expertise: BusinessUser.Map.expertise(input.base.sub_expertises)
    };
    return typia.equals<IHSProvider.ISummary>(provider)
      ? Result.Ok.map(provider)
      : Result.Error.map(null);
  };
  export const entityPublic = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            select: ReturnType<typeof Json.findPublicSelect>;
          }>
        >
      >
    >
  ): IResult<IHSProvider.IPublic, null> => {
    const provider: IHSProvider.IPublic = {
      type: "home service provider",
      mode: "public",
      id: input.id,
      name: input.base.base.name,
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at),
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content
      },
      address: {
        first: input.base.address_first,
        second: input.base.address_second
      },
      expertise: BusinessUser.Map.expertise(input.base.sub_expertises),
      email: input.base.base.email,
      phone: input.base.phone,
      business_registration_num: input.business_registration_num,
      example_images: input.example_images.map(
        ({ id, url, created_at, updated_at }) => ({
          id,
          url,
          created_at: getISOString(created_at),
          updated_at: getISOString(updated_at)
        })
      )
    };
    return typia.equals<IHSProvider.IPublic>(provider)
      ? Result.Ok.map(provider)
      : Result.Error.map(null);
  };
  export const entityPrivate = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.hSProviderModel.findFirst<{
            select: ReturnType<typeof Json.findPrivateSelect>;
          }>
        >
      >
    >
  ): IResult<IHSProvider.IPrivate, null> => {
    const provider: IHSProvider.IPrivate = {
      type: "home service provider",
      mode: "private",
      id: input.id,
      name: input.base.base.name,
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at),
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content
      },
      address: {
        first: input.base.address_first,
        second: input.base.address_second
      },
      expertise: BusinessUser.Map.expertise(input.base.sub_expertises),
      email: input.base.base.email,
      phone: input.base.phone,
      business_registration_num: input.business_registration_num,
      example_images: input.example_images.map(
        ({ id, url, created_at, updated_at, is_visible }) => ({
          id,
          url,
          created_at: getISOString(created_at),
          updated_at: getISOString(updated_at),
          is_visible
        })
      ),
      is_verified: input.base.is_verified,
      business_certification_images: BusinessUser.Map.certificationImages(
        input.base.certification_images
      ),
      acceptant_agreements: User.Map.accepatantAgreements(
        input.base.base.agreement_acceptances
      )
    };
    return typia.equals<IHSProvider.IPrivate>(provider)
      ? Result.Ok.map(provider)
      : Result.Error.map(null);
  };
}
