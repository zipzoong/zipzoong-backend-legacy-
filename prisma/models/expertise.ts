import { ExpertBusinessType } from "../enums";
import { Entity } from "../mixins";
import { createModel } from "schemix";
import { BusinessUser } from "./user";

export const SubExpertise = createModel("SubExpertiseModel", (model) => {
  model
    .mixin(Entity)
    .string("sub_category_id")
    .string("business_user_id")
    .relation("sub_category", ExpertSubCategory, {
      fields: ["sub_category_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("business_user", BusinessUser, {
      fields: ["business_user_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .unique({ fields: ["sub_category_id", "business_user_id"] })
    .map("sub_expertises");
});

export const ExpertSubCategory = createModel(
  "ExpertSubCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name")
      .string("super_category_id")
      .relation("super_category", ExpertSuperCategory, {
        fields: ["super_category_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .relation("expertises", SubExpertise, { list: true })
      .map("expert_sub_categories");
  }
);

export const ExpertSuperCategory = createModel(
  "ExpertSuperCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name", { unique: true })
      .enum("business_type", ExpertBusinessType)
      .relation("sub_categories", ExpertSubCategory, { list: true })
      .map("expert_super_categories");
  }
);
