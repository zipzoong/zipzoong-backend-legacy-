import { IREAgent } from "@DTO/user/re_agent";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import { getISOString, isActive } from "@UTIL";
import { randomUUID } from "crypto";
import { IBusinessUser } from "@DTO/user/business_user";
import typia from "typia";

export namespace REAgent {
  export namespace json {
    export const createData = (input: IREAgent.ICreate) => {
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
            address_first: input.real_estate.address.first,
            address_second: input.real_estate.address.second,
            profile_image_url: input.profile_image_url,
            super_expertise: { connect: { id: input.super_expertise_id } },
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
        is_licensed: input.is_licensed,
        re_num: input.real_estate.num,
        re_name: input.real_estate.name,
        re_phone: input.real_estate.phone,
        re_licensed_agent_name: input.real_estate.licensed_agent_name
      } satisfies Prisma.REAgentModelCreateArgs["data"];
    };

    export const findInclude = () =>
      ({
        base: {
          include: {
            base: true,
            sub_expertises: { include: { category: true } },
            super_expertise: true
          }
        },
        properties: {
          include: { sub_category: true }
        }
      } satisfies Prisma.REAgentModelInclude);

    export const findPrivateInclude = () =>
      ({
        base: {
          include: {
            base: {
              include: {
                agreement_acceptances: { include: { agreement: true } }
              }
            },
            sub_expertises: { include: { category: true } },
            super_expertise: true,
            certifications: true
          }
        },
        properties: {
          include: { sub_category: true }
        }
      } satisfies Prisma.REAgentModelInclude);

    export const findPropertyInclude = () =>
      ({ sub_category: true } satisfies Prisma.REProertyModelInclude);
  }

  export const map = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            include: ReturnType<typeof json.findInclude>;
          }>
        >
      >
    >
  ): IREAgent => {
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
      super_expertise: {
        super_category_id: input.base.super_expertise_id,
        name: input.base.super_expertise.name
      },
      sub_expertises: input.base.sub_expertises
        .filter(({ is_deleted }) => !is_deleted)
        .map(({ sub_category_id, category: { name } }) => ({
          sub_category_id,
          name
        })),
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
      properties: input.properties
        .filter(isActive)
        .map(
          ({
            id,
            name,
            main_image_url,
            sub_category,
            created_at,
            updated_at
          }) => ({
            id,
            name,
            main_image_url,
            category: { id: sub_category.id, name: sub_category.name },
            created_at: getISOString(created_at),
            updated_at: getISOString(updated_at)
          })
        )
    };
    if (!typia.equals<IREAgent>(agent))
      throw Error(`re agent: ${input.id} has invalid data`);
    return agent;
  };

  export const mapPrivate = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEAgentModel.findFirst<{
            include: ReturnType<typeof json.findPrivateInclude>;
          }>
        >
      >
    >
  ): IREAgent.IPrivate => {
    const base = map(input);
    const privateFragment: IBusinessUser.IPrivateFragment = {
      is_verified: input.base.is_verified,
      business_certifications: input.base.certifications
        .filter(({ is_deleted }) => !is_deleted)
        .map(({ id, url }) => ({
          id,
          url
        })),
      acceptant_agreements: input.base.base.agreement_acceptances
        .filter(
          ({ is_deleted, agreement }) => !is_deleted && !agreement.is_deleted
        )
        .map(({ agreement: { id, title, content, user_type } }) => ({
          id,
          title,
          content,
          user_type
        }))
    };
    const agent = { ...base, ...privateFragment };
    if (!typia.equals<IREAgent.IPrivate>(agent))
      throw Error(`re agent: ${input.id} has invalid data`);
    return agent;
  };

  export const mapProperty = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.rEProertyModel.findFirst<{
            include: ReturnType<typeof json.findPropertyInclude>;
          }>
        >
      >
    >
  ): IREAgent.IProperty => ({
    id: input.id,
    name: input.name,
    main_image_url: input.main_image_url,
    category: { id: input.sub_category.id, name: input.sub_category.name },
    created_at: getISOString(input.created_at),
    updated_at: getISOString(input.updated_at)
  });
}
