import { Entity } from "../mixins";
import { FocusCareStatus } from "../enums";
import { createModel } from "schemix";
import { Customer } from "./user";
import { ConsultationTime } from "./consultation_time";
import { ServiceSuperCategory } from "./service_category";

export const FocusCareRequest = createModel(
  "FocusCareRequestModel",
  (model) => {
    model
      .mixin(Entity)
      .dateTime("care_start_date", { raw: "@database.Date" })
      .dateTime("care_end_date", { raw: "@database.Date" })
      .string("detail")
      .enum("status", FocusCareStatus)
      .string("requester_id")
      .relation("requester", Customer, {
        fields: ["requester_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .relation("consultation_times", FocusCareConsultationTimeCheck, {
        list: true
      })
      .relation("services", FocusCareServiceCheck, {
        list: true
      })
      .map("focus_care_requests");
  }
);

export const FocusCareServiceCheck = createModel(
  "FocusCareServiceCheckModel",
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
      .relation("request", FocusCareRequest, {
        fields: ["request_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("focus_care_service_checks");
  }
);

export const FocusCareConsultationTimeCheck = createModel(
  "FocusCareConsultationTimeCheckModel",
  (model) => {
    model
      .mixin(Entity)
      .string("consultation_time_id")
      .string("request_id")
      .relation("consultation_time", ConsultationTime, {
        fields: ["consultation_time_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .relation("request", FocusCareRequest, {
        fields: ["request_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("focus_care_consultation_time_checks");
  }
);
