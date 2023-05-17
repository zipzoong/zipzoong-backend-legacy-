import { Mutable, Omit } from "@TYPE";
import { IDateTime, IPage } from "./common";
import { ICustomer } from "./user/customer";

export interface IZipzoongCareRequest extends IDateTime {
  readonly id: string;
  readonly status: IZipzoongCareRequest.Status;
  readonly requester: IZipzoongCareRequest.IRequester;
  /** @foramt date */
  readonly care_start_date: string;
  /** @format date */
  readonly care_end_date: string;
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

  export type IRequester = Pick<ICustomer, "id" | "name" | "phone">;

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
      | "requester"
      | "checked_consultation_times"
      | "checked_services"
    > {
    requester_id: string;
    consultation_times: ICreateCheckedConsultationTime[];
    service_ids: string[];
  }

  export type ICreateRequest = Omit<ICreate, "requester_id">;
}
