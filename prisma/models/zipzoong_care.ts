import { Entity } from "../mixins";
import { ZipzoongCareStatus } from "../enums";
import { createModel } from "schemix";
import { Customer } from "./user";
import { ServiceSuperCategory } from "./service_category";

export const ZipzoongCareRequest = createModel(
  "ZipzoongCareRequestModel",
  (model) => {
    model
      .mixin(Entity)
      .dateTime("care_start_date", { raw: "@database.Date" })
      .dateTime("care_end_date", { raw: "@database.Date" })
      .string("detail")
      .enum("status", ZipzoongCareStatus)
      .string("requester_id")
      .relation("requester", Customer, {
        fields: ["requester_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .relation("consultation_time_checks", ZipzoongCareConsultationTimeCheck, {
        list: true
      })
      .relation("service_checks", ZipzoongCareServiceCheck, {
        list: true
      })
      .map("zipzoong_care_requests");
  }
);

export const ZipzoongCareServiceCheck = createModel(
  "ZipzoongCareServiceCheckModel",
  (model) => {
    model
      .mixin(Entity)
      .string("service_super_category_id")
      .string("request_id")
      .relation("service_super_category", ServiceSuperCategory, {
        fields: ["service_super_category_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .relation("request", ZipzoongCareRequest, {
        fields: ["request_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("zipzoong_care_service_checks");
  }
);

export const ZipzoongCareConsultationTimeCheck = createModel(
  "ZipzoongCareConsultationTimeCheckModel",
  (model) => {
    model
      .mixin(Entity)
      .dateTime("start_time", { raw: "@database.Timetz" })
      .dateTime("end_time", { raw: "@database.Timetz" })
      .string("request_id")
      .relation("request", ZipzoongCareRequest, {
        fields: ["request_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("zipzoong_care_consultation_time_checks");
  }
);
