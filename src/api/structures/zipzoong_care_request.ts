import { Mutable, Omit } from "@TYPE";
import { IDateTime, IPage, IPaginatedResponse as IPaginated } from "./common";

export interface IZipzoongCareRequest extends IDateTime {
  readonly id: string;
  readonly status: IZipzoongCareRequest.Status;
  /** @format date */
  readonly care_start_date: string;
  /** @format date */
  readonly care_end_date: string;
  /** @maxLength 500 */
  readonly detail: string;
  readonly checked_services: IZipzoongCareRequest.ICheckedService[];
  readonly checked_consultation_times: IZipzoongCareRequest.ICheckedConsultationTime[];
}

export namespace IZipzoongCareRequest {
  export type Status = "pending" | "caring" | "cared" | "cancelled";

  export interface ISearch extends IPage {
    /** @minItems 1 */
    status: Status[];
  }

  export interface ICheckedService {
    readonly id: string;
    readonly name: string;
  }

  export interface ICheckedConsultationTime {
    readonly id: string;
    /** @format ^([0-1][0-9]|2[0-3]):([0-5][0-9])$ */
    readonly start_time: string;
    /** @format ^([0-1][0-9]|2[0-3]):([0-5][0-9])$ */
    readonly end_time: string;
  }

  export type ICreateCheckedConsultationTime = Omit<
    ICheckedConsultationTime,
    "id"
  >;

  export interface ICreate
    extends Omit<
      Mutable<IZipzoongCareRequest>,
      | "id"
      | "created_at"
      | "updated_at"
      | "status"
      | "checked_consultation_times"
      | "checked_services"
    > {
    requester_id: string;
    /** @minItems 1 */
    consultation_times: ICreateCheckedConsultationTime[];
    /** @minItems 1 */
    service_ids: string[];
  }

  export type ICreateRequest = Omit<ICreate, "requester_id">;

  export type IPaginatedResponse = IPaginated<IZipzoongCareRequest>;
}
