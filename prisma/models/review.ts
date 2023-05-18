import { Entity } from "../mixins";
import { RateTargetType } from "../enums";
import { createModel } from "schemix";
import { BusinessUser, Customer } from "./user";

export const Review = createModel("ReviewModel", (model) => {
  model
    .mixin(Entity)
    .string("reviewer_id")
    .string("reviewee_id")
    .string("content")
    .relation("reviewer", Customer, {
      fields: ["reviewer_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("reviewee", BusinessUser, {
      fields: ["reviewee_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("rates", Rate, { list: true })
    .map("reviews");
});

export const Rate = createModel("RateModel", (model) => {
  model
    .mixin(Entity)
    .int("score", { raw: "@database.SmallInt" })
    .string("category_id")
    .string("review_id")
    .relation("category", RateCategory, {
      fields: ["category_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("review", Review, {
      fields: ["review_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .unique({ fields: ["category_id", "review_id"] })
    .map("rates");
});

export const RateCategory = createModel("RateCategoryModel", (model) => {
  model
    .mixin(Entity)
    .string("name", { unique: true })
    .enum("target_type", RateTargetType)
    .relation("rates", Rate, { list: true })
    .map("rate_categories");
});
