import { createModel } from "schemix";
import { BusinessUser, Customer } from "./user";

export const BusinessRate = createModel("BusinessRateModel", (model) => {
  model
    .string("id", { id: true })
    .string("category_id")
    .string("rater_id")
    .string("ratee_id")
    .int("rate", { raw: "@database.SmallInt" })
    .relation("rater", Customer, {
      fields: ["rater_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("ratee", BusinessUser, {
      fields: ["ratee_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("category", BusinessRateCategory, {
      fields: ["category_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .map("business_rates");
});

export const BusinessRateCategory = createModel(
  "BusinessRateCategoryModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("name", { unique: true })
      .relation("rates", BusinessRate, { list: true })
      .map("business_rate_categories");
  }
);

export const BusinessReview = createModel("BusinessReviewModel", (model) => {
  model
    .string("id", { id: true })
    .string("reviewer_id")
    .string("reviewee_id")
    .string("review")
    .relation("reviewer", Customer, {
      fields: ["reviewer_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("reviewee", BusinessUser, {
      fields: ["reviewee_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .map("business_reviews");
});
