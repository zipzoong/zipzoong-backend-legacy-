import { prisma } from "@INFRA/DB";
import { Json } from "./json";
import { getISOString, isActive } from "@UTIL";
import typia from "typia";
import { IZipzoongCareRequest } from "@DTO/zipzoong_care";

export namespace Map {
  /** @format date */
  export const dateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  /** @format HH:mm */
  export const timeString = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

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
  ): IZipzoongCareRequest => {
    const request = {
      id: input.id,
      status: input.status,
      detail: input.detail,
      created_at: getISOString(input.created_at),
      updated_at: getISOString(input.updated_at),
      care_start_date: Map.dateString(input.care_start_date),
      care_end_date: Map.dateString(input.care_end_date),
      requester: {
        id: input.requester.id,
        name: input.requester.base.name,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        phone: input.requester.phone!
      },
      checked_services: input.service_checks.filter(isActive).map((check) => ({
        id: check.service_super_category.id,
        name: check.service_super_category.name
      })),
      checked_consultation_times: input.consultation_time_checks
        .filter(isActive)
        .map((check) => ({
          id: check.id,
          start_time: Map.timeString(check.start_time),
          end_time: Map.timeString(check.end_time)
        }))
    };

    if (!typia.equals<IZipzoongCareRequest>(request))
      throw Error("ZZCare Request have invalid data");

    return request;
  };
}
