import { createModel } from "schemix";
import { HomeCareCompany, RealEstateAgent } from "./user";

export const HomeCareSpecializedSuperField = createModel(
  "HomeCareSpecializedSuperFieldModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("name", { unique: true })
      .relation("sub_fields", HomeCareSpecializedSubField, {
        list: true
      })
      .map("home_care_specialized_super_fields");
  }
);

export const HomeCareSpecializedSubField = createModel(
  "HomeCareSpecializedSubFieldModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("name", { unique: true })
      .string("super_id")
      .relation("super", HomeCareSpecializedSuperField, {
        fields: ["super_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .relation("home_care_companies", HomeCareCompany, { list: true })
      .map("home_care_specialized_sub_fields");
  }
);

export const RealEstateSpecializedSuperField = createModel(
  "RealEstateSpecializedSuperFieldModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("name", { unique: true })
      .relation("sub_fields", RealEstateSpecializedSubField, {
        list: true
      })
      .map("real_estate_specialized_super_fields");
  }
);

export const RealEstateSpecializedSubField = createModel(
  "RealEstateSpecializedSubFieldModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("name", { unique: true })
      .string("super_id")
      .relation("super", RealEstateSpecializedSuperField, {
        fields: ["super_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .relation("real_estate_agents", RealEstateAgent, { list: true })
      .map("real_estate_specialized_sub_fields");
  }
);
