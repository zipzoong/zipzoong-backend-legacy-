import { getISOString } from "@UTIL";
import { IUser } from "@DTO/user/user";
import { Prisma } from "@PRISMA";
import { randomUUID } from "crypto";

export namespace Json {
  export const createData = (input: IUser.ICreate) => {
    const now = getISOString();
    return {
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
    } satisfies Prisma.UserModelCreateInput;
  };
  export const findSummarySelect = () =>
    ({
      id: true,
      name: true,
      created_at: true,
      updated_at: true
    } satisfies Prisma.UserModelSelect);

  export const findPublicSelect = () =>
    ({
      id: true,
      name: true,
      email: true,
      created_at: true,
      updated_at: true,
      is_deleted: true,
      deleted_at: true
    } satisfies Prisma.UserModelSelect);

  export const findPrivateSelect = () =>
    ({
      id: true,
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
    } satisfies Prisma.UserModelSelect);
}
