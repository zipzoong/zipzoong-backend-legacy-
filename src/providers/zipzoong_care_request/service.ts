import { IPaginatedResponse } from "@DTO/common";
import { IZipzoongCareRequest } from "@DTO/zipzoong_care";
import { map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import Authentication from "@PROVIDER/authentication";
import Customer from "@PROVIDER/user/customer";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";
import { Check } from "./check";
import { Json } from "./json";
import { Map } from "./map";

export namespace Service {
  export const request = async ({
    input,
    user_id
  }: {
    input: IZipzoongCareRequest.ICreateRequest;
    user_id: string;
  }): Promise<void> => {
    const tx = prisma;
    const customer = await Customer.Service.Me.get({ user_id, tx });
    Authentication.Check.verifyUser(customer);

    await Check.serviceCategoryValid({ service_ids: input.service_ids, tx });
    const now = getISOString();
    await tx.zipzoongCareRequestModel.create({
      data: {
        id: randomUUID(),
        created_at: now,
        updated_at: now,
        is_deleted: false,
        deleted_at: null,
        care_start_date: input.care_start_date,
        care_end_date: input.care_end_date,
        detail: input.detail,
        status: "pending",
        requester: { connect: { id: user_id } },
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
              start_time: time.start_time,
              end_time: time.end_time
            }))
          }
        }
      }
    });
  };

  export const getList = async ({
    user_id,
    search: { page = 1, status }
  }: {
    search: IZipzoongCareRequest.ISearch;
    user_id: string;
  }): Promise<IPaginatedResponse<IZipzoongCareRequest>> => {
    const tx = prisma;
    const customer = await Customer.Service.Me.get({ user_id, tx });
    Authentication.Check.verifyUser(customer);

    // authorization

    return pipe(
      30, // take

      async (take) =>
        tx.zipzoongCareRequestModel.findMany({
          where: {
            requester_id: user_id,
            status: { in: status },
            is_deleted: false
          },
          include: Json.findInclude(),
          take,
          skip: (page - 1) * take
        }),

      map(Map.zipzoongCareRequest),

      toArray,

      (data) => ({ data, page })
    );
  };
}
