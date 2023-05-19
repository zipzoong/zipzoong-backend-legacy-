import { Entity } from "../mixins";
import { createModel } from "schemix";
import { BusinessUser, Customer } from "./user";

export const Review = createModel("ReviewModel", (model) => {
  model
    .mixin(Entity)
    .string("reviewer_id")
    .string("reviewee_id")
    .string("content")
    .int("rating", { raw: "@database.SmallInt" })
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
    .map("reviews");
});

export const ReviewStats = createModel("ReviewStatsModel", (model) => {
  model
    .dateTime("created_at", {
      raw: "@database.Timestamptz",
      default: { now: true }
    })
    .dateTime("updated_at", {
      raw: "@database.Timestamptz",
      default: { now: true }
    })
    .decimal("review_cnt")
    .decimal("rating_sum")
    .string("reviewee_id", { id: true })
    .relation("reviewee", BusinessUser, {
      fields: ["reviewee_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .map("review_stats");
});
