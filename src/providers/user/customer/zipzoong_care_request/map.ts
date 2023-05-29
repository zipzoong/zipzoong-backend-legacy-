import { IResult } from "@TYPE";
import { prisma } from "@INFRA/DB";
import { Json } from "./json";
import {
  getDateString,
  getISOString,
  getTimeString,
  isActive,
  Result
} from "@UTIL";
import typia from "typia";
import { IZipzoongCareRequest } from "@DTO/zipzoong_care_request";

export namespace Map {
  export const entity = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.zipzoongCareRequestModel.findFirst<{
            select: ReturnType<typeof Json.findSelect>;
          }>
        >
      >
    >
  ): IResult<IZipzoongCareRequest, null> => {
    const request: IZipzoongCareRequest = {
      id: input.id,
      status: input.status,
      detail: input.detail,
      created_at: getISOString(input.created_at),
      updated_at: getISOString(input.updated_at),
      care_start_date: getDateString(input.care_start_date),
      care_end_date: getDateString(input.care_end_date),
      checked_services: input.service_checks.filter(isActive).map((check) => ({
        id: check.service_super_category.id,
        name: check.service_super_category.name
      })),
      checked_consultation_times: input.consultation_time_checks
        .filter(isActive)
        .map((check) => ({
          id: check.id,
          start_time: getTimeString(check.start_time),
          end_time: getTimeString(check.end_time)
        }))
    };

    return typia.equals<IZipzoongCareRequest>(request)
      ? Result.Ok.map(request)
      : Result.Error.map(null);
  };
}
