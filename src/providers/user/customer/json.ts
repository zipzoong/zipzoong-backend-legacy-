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
  export const findInclude = () =>
    ({
      base: true
    } satisfies Prisma.CustomerModelInclude);
  export const findPrivateInclude = () =>
    ({
      base: {
        include: {
          agreement_acceptances: { include: { agreement: true } }
        }
      }
    } satisfies Prisma.CustomerModelInclude);
}
