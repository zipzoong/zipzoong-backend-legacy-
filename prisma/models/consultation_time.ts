import { Entity } from "../mixins";
import { createModel } from "schemix";
import { FocusCareConsultationTimeCheck } from "./focus_care";

export const ConsultationTime = createModel(
  "ConsultationTimeModel",
  (model) => {
    model
      .mixin(Entity)
      .dateTime("start_time", { raw: "@database.Timetz" })
      .dateTime("end_time", { raw: "@database.Timetz" })
      .relation("focus_care_checks", FocusCareConsultationTimeCheck, {
        list: true
      })
      .map("consultation_times");
  }
);
