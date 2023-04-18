import { createModel } from "schemix";
import { RelationalFieldOptions } from "schemix/dist/typings/prisma-type-options";
import { RealEstateProperty } from "./real_estate_property";
import {
  HomeCareSpecializedSubField,
  RealEstateSpecializedSubField
} from "./specialized_field";
import { BusinessRate, BusinessReview } from "./rate";
import { BoardArticle, BoardComment } from "./board";
import { BusinessCertification } from "./certification";

const one_to_one: RelationalFieldOptions = {
  fields: ["id"],
  references: ["id"],
  onUpdate: "NoAction",
  onDelete: "NoAction"
};

export const Accessor = createModel("AccessorModel", (model) => {
  model
    .string("id", { id: true })
    .string("oauth_sub")
    .string("oauth_type")
    .string("business_user_id", { optional: true })
    .string("customer_id", { optional: true })
    .relation("business_user", BusinessUser, {
      optional: true,
      fields: ["business_user_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("customer", Customer, {
      optional: true,
      fields: ["customer_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .unique({ fields: ["oauth_type", "oauth_sub"] })
    .map("accessors");
});

export const User = createModel("UserModel", (model) => {
  model
    .string("id", { id: true })
    .string("name")
    .string("email", { optional: true })
    .boolean("email_verified")
    .string("phone", { optional: true })
    .boolean("phone_verified")
    .string("address_first", { optional: true })
    .string("address_second", { optional: true })
    .string("profile_image_url", { optional: true })
    .relation("customer", Customer, { optional: true })
    .relation("business_user", BusinessUser, { optional: true })
    .relation("board_articles", BoardArticle, { list: true })
    .relation("board_comments", BoardComment, { list: true })
    .map("users");
});

export const Customer = createModel("CustomerModel", (model) => {
  model
    .string("id", { id: true })
    .string("birth", { optional: true })
    .string("gender", { optional: true })
    .relation("base", User, one_to_one)
    .relation("accessors", Accessor, { list: true })
    .relation("reviews", BusinessReview, { list: true })
    .relation("rates", BusinessRate, { list: true })
    .map("customers");
});

export const BusinessUser = createModel("BusinessUserModel", (model) => {
  model
    .string("id", { id: true })
    .boolean("is_verified")
    .string("introduction_title")
    .string("introduction_content")
    .relation("base", User, one_to_one)
    .relation("accessors", Accessor, { list: true })
    .relation("real_estate_agent", RealEstateAgent, { optional: true })
    .relation("home_care_company", HomeCareCompany, { optional: true })
    .relation("reviews", BusinessReview, { list: true })
    .relation("rates", BusinessRate, { list: true })
    .relation("certifications", BusinessCertification, { list: true })
    .map("business_users");
});

export const RealEstateAgent = createModel("RealEstateAgentModel", (model) => {
  model
    .string("id", { id: true })
    .boolean("is_licensed", { optional: true })
    .string("real_estate_num", { optional: true })
    .string("real_estate_name", { optional: true })
    .string("real_estate_phone", { optional: true })
    .string("licensed_agent_name", { optional: true })
    .string("specialized_field_id", { optional: true })
    .relation("business", BusinessUser, one_to_one)
    .relation("specialized_field", RealEstateSpecializedSubField, {
      optional: true,
      fields: ["specialized_field_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("properties", RealEstateProperty, { list: true })
    .map("real_estate_agents");
});

export const HomeCareCompany = createModel("HomeCareCompanyModel", (model) => {
  model
    .string("id", { id: true })
    .string("business_registration_num", { optional: true })
    .string("specialized_field_id", { optional: true })
    .relation("business", BusinessUser, one_to_one)
    .relation("specialized_field", HomeCareSpecializedSubField, {
      optional: true,
      fields: ["specialized_field_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("introduction_images", HomeCareIntroductionImage, { list: true })
    .map("home_care_companies");
});

export const HomeCareIntroductionImage = createModel(
  "HomeCareIntroductionImageModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("image_url")
      .string("company_id")
      .relation("company", HomeCareCompany, {
        fields: ["company_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .map("home_care_introduction_images");
  }
);
