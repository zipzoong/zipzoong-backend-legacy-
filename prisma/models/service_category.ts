import { Entity } from "../mixins";
import { ServiceType } from "../enums";
import { createModel } from "schemix";
import { FocusCareServiceCheck } from "./focus_care";
import { SubExpertise } from "./user";

export const ServiceSubCategory = createModel(
  "ServiceSubCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name")
      .string("super_category_id")
      .relation("super_category", ServiceSuperCategory, {
        fields: ["super_category_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .relation("expertises", SubExpertise, { list: true })
      .map("service_sub_categories");
  }
);

export const ServiceSuperCategory = createModel(
  "ServiceSuperCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name", { unique: true })
      .enum("type", ServiceType)
      .relation("sub_categories", ServiceSubCategory, { list: true })
      .relation("focus_care_checks", FocusCareServiceCheck, {
        list: true
      })
      .map("service_super_categories");
  }
);
