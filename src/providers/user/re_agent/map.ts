import { IResult } from "@TYPE";
import { IREAgent } from "@DTO/user/re_agent";
import { prisma } from "@INFRA/DB";
import { getISOString, isActive, Result } from "@UTIL";
import typia from "typia";
import BusinessUser from "../business_user";
import User from "../user";
import { Json } from "./json";
import REProperty from "@PROVIDER/re_property";

export namespace Map {
  export const entitySummary = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            select: ReturnType<typeof Json.findSummarySelect>;
          }>
        >
      >
    >
  ): IResult<IREAgent.ISummary, null> => {
    const agent: IREAgent.ISummary = {
      type: "real estate agent",
      mode: "summary",
      id: input.id,
      name: input.base.base.name,
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at),
      is_licensed: input.is_licensed,
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content
      },
      expertise: BusinessUser.Map.expertise(input.base.sub_expertises)
    };
    return typia.equals<IREAgent.ISummary>(agent)
      ? Result.Ok.map(agent)
      : Result.Error.map(null);
  };
  export const entityPublic = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            select: ReturnType<typeof Json.findPublicSelect>;
          }>
        >
      >
    >
  ): IResult<IREAgent.IPublic, null> => {
    const agent: IREAgent.IPublic = {
      type: "real estate agent",
      mode: "public",
      id: input.id,
      name: input.base.base.name,
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at),
      is_licensed: input.is_licensed,
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content
      },
      expertise: BusinessUser.Map.expertise(input.base.sub_expertises),
      email: input.base.base.email,
      phone: input.base.phone,
      real_estate: {
        num: input.re_num,
        name: input.re_name,
        phone: input.base.phone,
        licensed_agent_name: input.re_licensed_agent_name,
        address: {
          first: input.base.address_first,
          second: input.base.address_second
        }
      },
      properties: input.properties.map(propertyPublic)
    };
    return typia.equals<IREAgent.IPublic>(agent)
      ? Result.Ok.map(agent)
      : Result.Error.map(null);
  };
  export const entityPrivate = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            select: ReturnType<typeof Json.findPrivateSelect>;
          }>
        >
      >
    >
  ): IResult<IREAgent.IPrivate, null> => {
    const agent: IREAgent.IPrivate = {
      type: "real estate agent",
      mode: "private",
      id: input.id,
      name: input.base.base.name,
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at),
      is_licensed: input.is_licensed,
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content
      },
      expertise: BusinessUser.Map.expertise(input.base.sub_expertises),
      email: input.base.base.email,
      phone: input.base.phone,
      real_estate: {
        num: input.re_num,
        name: input.re_name,
        phone: input.base.phone,
        licensed_agent_name: input.re_licensed_agent_name,
        address: {
          first: input.base.address_first,
          second: input.base.address_second
        }
      },
      properties: input.properties.map(propertyPrivate),
      is_verified: input.base.is_verified,
      business_certification_images: BusinessUser.Map.certificationImages(
        input.base.certification_images
      ),
      acceptant_agreements: User.Map.accepatantAgreements(
        input.base.base.agreement_acceptances
      )
    };
    return typia.equals<IREAgent.IPrivate>(agent)
      ? Result.Ok.map(agent)
      : Result.Error.map(null);
  };
  export const propertyPublic = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEPropertyModel.findFirst<{
            select: ReturnType<typeof REProperty.Json.findSummarySelect>;
          }>
        >
      >
    >
  ): IREAgent.IProperty.IPublic => ({
    id: input.id,
    name: input.name,
    main_image_url: input.main_image_url,
    sub_categories: input.categories
      .filter(isActive)
      .map(({ sub_category }) => ({
        level: "sub",
        id: sub_category.id,
        name: sub_category.name,
        middle_category: {
          level: "middle",
          id: sub_category.middle_category.id,
          name: sub_category.middle_category.name,
          super_category: {
            level: "super",
            id: sub_category.middle_category.super_category.id,
            name: sub_category.middle_category.super_category.name
          }
        }
      })),
    created_at: getISOString(input.created_at),
    updated_at: getISOString(input.updated_at)
  });
  export const propertyPrivate = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEPropertyModel.findFirst<{
            select: ReturnType<typeof REProperty.Json.findSummarySelect>;
          }>
        >
      >
    >
  ): IREAgent.IProperty.IPrivate => ({
    id: input.id,
    name: input.name,
    main_image_url: input.main_image_url,
    sub_categories: input.categories
      .filter(isActive)
      .map(({ sub_category }) => ({
        level: "sub",
        id: sub_category.id,
        name: sub_category.name,
        middle_category: {
          level: "middle",
          id: sub_category.middle_category.id,
          name: sub_category.middle_category.name,
          super_category: {
            level: "super",
            id: sub_category.middle_category.super_category.id,
            name: sub_category.middle_category.super_category.name
          }
        }
      })),
    created_at: getISOString(input.created_at),
    updated_at: getISOString(input.updated_at),
    is_visible: input.is_visible
  });
}
