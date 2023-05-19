import { IBusinessUser } from "@DTO/user/business_user";
import { IREAgent } from "@DTO/user/re_agent";
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
          typeof prisma.rEAgentModel.findFirst<{
            select: ReturnType<typeof Json.findSelect>;
          }>
        >
      >
    >
  ): IREAgent => {
    const expertise = BusinessUser.Map.expertise(input.base.sub_expertises);

    const agent: IREAgent = {
      type: "real estate agent",
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
      is_licensed: input.is_licensed,
      properties: input.properties.map(property),
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
      review_stats: BusinessUser.Map.reviewStats(input.base)
    };
    if (!typia.equals<IREAgent>(agent))
      throw Error(`re agent: ${input.id} has invalid data`);
    return agent;
  };

  export const privateEntity = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            select: ReturnType<typeof Json.findPrivateSelect>;
          }>
        >
      >
    >
  ): IREAgent.IPrivate => {
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
    const agent: IREAgent.IPrivate = { ...base, ...privateFragment };
    if (!typia.equals<IREAgent.IPrivate>(agent))
      throw Error(`re agent: ${input.id} has invalid data`);
    return agent;
  };

  export const summaryEntity = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            select: ReturnType<typeof Json.findSummarySelect>;
          }>
        >
      >
    >
  ): IREAgent.ISummary => ({
    type: "real estate agent",
    id: input.id,
    is_licensed: input.is_licensed,
    profile_image_url: input.base.profile_image_url,
    introduction: {
      title: input.base.introduction_title,
      content: input.base.introduction_content
    },
    review_stats: BusinessUser.Map.reviewStats(input.base),
    expertise: BusinessUser.Map.expertise(input.base.sub_expertises),
    name: input.base.base.name
  });

  export const property = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEPropertyModel.findFirst<{
            select: ReturnType<typeof Json.findPropertySelect>;
          }>
        >
      >
    >
  ): IREAgent.IProperty => ({
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
}
