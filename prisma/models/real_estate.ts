import { Entity } from "../mixins";
import { createModel } from "schemix";
import { REAgent } from "./user";

export const REProperty = createModel("REPropertyModel", (model) => {
  model
    .mixin(Entity)
    .string("name")
    .string("main_image_url")
    .string("re_agent_id")
    .relation("re_agent", REAgent, {
      fields: ["re_agent_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("categories", REPropertyCategory, { list: true })
    .map("re_properties");
});

export const REPropertyCategory = createModel(
  "REPropertyCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("re_property_id")
      .string("sub_category_id")
      .relation("re_property", REProperty, {
        fields: ["re_property_id"],
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
      .map("re_property_categories");
  }
);

export const REPropertySubCategory = createModel(
  "REPropertySubCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name")
      .string("middle_category_id")
      .relation("middle_category", REPropertyMiddleCategory, {
        fields: ["middle_category_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .relation("property_categories", REPropertyCategory, { list: true })
      .map("re_property_sub_categories");
  }
);

export const REPropertyMiddleCategory = createModel(
  "REPropertyMiddleCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name")
      .string("super_category_id")
      .relation("super_category", REPropertySuperCategory, {
        fields: ["super_category_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .relation("sub_categories", REPropertySubCategory, { list: true })
      .map("re_property_middle_categories");
  }
);

export const REPropertySuperCategory = createModel(
  "REPropertySuperCategoryModel",
  (model) => {
    model
      .mixin(Entity)
      .string("name", { unique: true })
      .relation("middle_categories", REPropertyMiddleCategory, { list: true })
      .map("re_property_super_categories");
  }
);
