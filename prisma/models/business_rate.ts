import { Entity } from "../mixins";
import { BusinessRateType } from "../enums";
import { createModel } from "schemix";
import { BusinessUser, Customer } from "./user";

export const BusinessRate = createModel("BusinessRateModel", (model) => {
  model
    .mixin(Entity)
    .string("rater_id")
    .string("ratee_id")
    .string("category_id")
    .int("score", { raw: "@database.SmallInt" })
    .relation("customer", Customer, {
      fields: ["rater_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("business_user", BusinessUser, {
      fields: ["ratee_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("category", BusinessRateCategory, {
      fields: ["category_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .map("business_rates");
});

export const BusinessRateCategory = createModel(
  "BusinessRateCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name", { unique: true })
      .enum("business_type", BusinessRateType)
      .relation("rates", BusinessRate, { list: true })
      .map("business_rate_categories");
  }
);
