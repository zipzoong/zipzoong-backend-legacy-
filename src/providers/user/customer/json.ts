import { ICustomer } from "@DTO/user/customer";
import { Prisma } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace Json {
  export const createData = (input: ICustomer.ICreate) => {
    const now = getISOString();
    return {
      birth: input.birth,
      gender: input.gender,
      phone: input.phone,
      profile_image_url: input.profile_image_url,
      address_first: input.address?.first,
      address_second: input.address?.second,
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
      }
    } satisfies Prisma.CustomerModelCreateInput;
  };

  export const findSelect = () =>
    ({
      id: true,
      phone: true,
      profile_image_url: true,
      address_first: true,
      address_second: true,
      gender: true,
      birth: true,
      base: {
        select: {
          name: true,
          email: true,
          created_at: true,
          updated_at: true,
          is_deleted: true,
          deleted_at: true
        }
      }
    } satisfies Prisma.CustomerModelSelect);

  export const findPrivateSelect = () =>
    ({
      id: true,
      phone: true,
      profile_image_url: true,
      address_first: true,
      address_second: true,
      gender: true,
      birth: true,
      base: {
        select: {
          name: true,
          email: true,
          created_at: true,
          updated_at: true,
          is_deleted: true,
          deleted_at: true,
          agreement_acceptances: {
            select: {
              created_at: true,
              updated_at: true,
              is_deleted: true,
              deleted_at: true,
              agreement: true
            }
          }
        }
      }
    } satisfies Prisma.CustomerModelSelect);
}
