import { Entity } from "../mixins";
import { createModel } from "schemix";
import { REAgent } from "./user";

export const REProperty = createModel("REProertyModel", (model) => {
  model
    .mixin(Entity)
    .string("name")
    .string("main_image_url")
    .string("agent_id")
    .string("sub_category_id")
    .relation("agent", REAgent, {
      fields: ["agent_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("sub_category", REPropertySubCategory, {
      fields: ["sub_category_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .map("re_properties");
});

export const REPropertySuperCategory = createModel(
  "REPropertySuperCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name", { unique: true })
      .relation("sub_categories", REPropertySubCategory, { list: true })
      .map("re_property_super_categories");
  }
);

export const REPropertySubCategory = createModel(
  "REPropertySubCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name", { unique: true })
      .string("super_category_id")
      .relation("super_category", REPropertySuperCategory, {
        fields: ["super_category_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .relation("properties", REProperty, { list: true })
      .map("re_property_sub_categories");
  }
);
