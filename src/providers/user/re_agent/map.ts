import { IBusinessUser } from "@DTO/user/business_user";
import { IREAgent } from "@DTO/user/re_agent";
import { prisma } from "@INFRA/DB";
import { getISOString, isActive } from "@UTIL";
import typia from "typia";
import BusinessUser from "../business_user";
import { Json } from "./json";

export namespace Map {
  export const rEAgent = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            include: ReturnType<typeof Json.findInclude>;
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
      phone: input.base.phone,
      profile_image_url: input.base.profile_image_url,
      introduction: {
        title: input.base.introduction_title,
        content: input.base.introduction_content
      },
      expertise,
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
      is_licensed: input.is_licensed,
      created_at: getISOString(input.base.base.created_at),
      updated_at: getISOString(input.base.base.updated_at),
      properties: input.properties.filter(isActive).map(property)
    };
    if (!typia.equals<IREAgent>(agent))
      throw Error(`re agent: ${input.id} has invalid data`);
    return agent;
  };

  export const privateREAgent = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            include: ReturnType<typeof Json.findPrivateInclude>;
          }>
        >
      >
    >
  ): IREAgent.IPrivate => {
    const base = rEAgent(input);
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
    const agent = { ...base, ...privateFragment };
    if (!typia.equals<IREAgent.IPrivate>(agent))
      throw Error(`re agent: ${input.id} has invalid data`);
    return agent;
  };

  export const property = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEProertyModel.findFirst<{
            include: ReturnType<typeof Json.findPropertyInclude>;
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
        type: "sub",
        id: sub_category.id,
        name: sub_category.name,
        middle_category: {
          type: "middle",
          id: sub_category.middle_category.id,
          name: sub_category.middle_category.name,
          super_category: {
            type: "super",
            id: sub_category.middle_category.super_category.id,
            name: sub_category.middle_category.super_category.name
          }
        }
      })),
    created_at: getISOString(input.created_at),
    updated_at: getISOString(input.updated_at)
  });
}
