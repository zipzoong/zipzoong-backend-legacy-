import { IZipzoongCareRequest } from "@DTO/zipzoong_care_request";
import { map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import Authentication from "@PROVIDER/authentication";
import Customer from "@PROVIDER/user/customer";
import { Check } from "./check";
import { Json } from "./json";
import { Map } from "./map";

export namespace Service {
  export const create = async ({
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
    await tx.zipzoongCareRequestModel.create({
      data: Json.createData({ ...input, requester_id: user_id })
    });
  };

  export const getList = async ({
    user_id,
    search: { page = 1, status }
  }: {
    search: IZipzoongCareRequest.ISearch;
    user_id: string;
  }): Promise<IZipzoongCareRequest.IPaginatedResponse> => {
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
          select: Json.findSelect(),
          take,
          skip: (page - 1) * take
        }),

      map(Map.entity),

      toArray,

      (data) => ({ data, page })
    );
  };
}
