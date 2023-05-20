import { IZipzoongCareRequest } from "@DTO/zipzoong_care_request";
import { Prisma } from "@PRISMA";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace Json {
  export const createData = (input: IZipzoongCareRequest.ICreate) => {
    const now = getISOString();
    return {
      id: randomUUID(),
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null,
      care_start_date: `${input.care_start_date}T00:00:00Z`,
      care_end_date: `${input.care_end_date}T00:00:00Z`,
      detail: input.detail,
      status: "pending",
      requester: { connect: { id: input.requester_id } },
      service_checks: {
        createMany: {
          data: input.service_ids.map((service_id) => ({
            id: randomUUID(),
            created_at: now,
            updated_at: now,
            is_deleted: false,
            deleted_at: null,
            service_super_category_id: service_id
          }))
        }
      },
      consultation_time_checks: {
        createMany: {
          data: input.consultation_times.map((time) => ({
            id: randomUUID(),
            created_at: now,
            updated_at: now,
            is_deleted: false,
            deleted_at: null,
            start_time: `2000-01-01T${time.start_time}:00+09:00`,
            end_time: `2000-01-01T${time.end_time}:00+09:00`
          }))
        }
      }
    } satisfies Prisma.ZipzoongCareRequestModelCreateInput;
  };

  export const findSelect = () =>
    ({
      id: true,
      created_at: true,
      updated_at: true,
      is_deleted: true,
      deleted_at: true,
      care_start_date: true,
      care_end_date: true,
      detail: true,
      status: true,
      consultation_time_checks: {
        select: {
          id: true,
          is_deleted: true,
          deleted_at: true,
          start_time: true,
          end_time: true
        }
      },
      service_checks: {
        select: {
          id: true,
          is_deleted: true,
          deleted_at: true,
          service_super_category: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    } satisfies Prisma.ZipzoongCareRequestModelSelect);

  export const findInclude = () =>
    ({
      requester: { include: { base: true } },
      service_checks: { include: { service_super_category: true } },
      consultation_time_checks: true
    } satisfies Prisma.ZipzoongCareRequestModelInclude);
}
