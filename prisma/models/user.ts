import { Entity } from "../mixins";
import { createModel } from "schemix";
import { RelationalFieldOptions } from "schemix/dist/typings/prisma-type-options";
import { GenderType } from "../enums";
import { REProperty } from "./real_estate";
import { Review, ReviewStats } from "./review";
import { OauthAccount } from "./account";
import { AgreementAcceptance } from "./agreement";
import { ZipzoongCareRequest } from "./zipzoong_care";
import { ServiceSubCategory } from "./service_category";

const one_to_one: RelationalFieldOptions = {
  fields: ["id"],
  references: ["id"],
  onUpdate: "NoAction",
  onDelete: "NoAction"
};

export const User = createModel("UserModel", (model) => {
  model
    .mixin(Entity)
    .string("name")
    .string("email", { optional: true })
    .relation("customer", Customer, { optional: true })
    .relation("business_user", BusinessUser, { optional: true })
    .relation("agreement_acceptances", AgreementAcceptance, { list: true })
    .map("users");
});

export const Customer = createModel("CustomerModel", (model) => {
  model
    .string("id", { id: true })
    .string("birth", { optional: true })
    .enum("gender", GenderType, { optional: true })
    .string("phone", { optional: true })
    .string("address_first", { optional: true })
    .string("address_second", { optional: true })
    .string("profile_image_url", { optional: true })
    .relation("base", User, one_to_one)
    .relation("oauth_accounts", OauthAccount, { list: true })
    .relation("reviews", Review, { list: true })
    .relation("zipzoong_care_requests", ZipzoongCareRequest, { list: true })
    .map("customers");
});

export const BusinessUser = createModel("BusinessUserModel", (model) => {
  model
    .string("id", { id: true })
    .boolean("is_verified")
    .string("introduction_title")
    .string("introduction_content")
    .string("phone")
    .string("address_first")
    .string("address_second", { optional: true })
    .string("profile_image_url")
    .relation("base", User, one_to_one)
    .relation("re_agent", REAgent, { optional: true })
    .relation("hs_provider", HSProvider, { optional: true })
    .relation("certification_images", BusinessCertificationImage, {
      list: true
    })
    .relation("sub_expertises", SubExpertise, { list: true })
    .relation("oauth_accounts", OauthAccount, { list: true })
    .relation("reviews", Review, { list: true })
    .relation("review_stats", ReviewStats, { optional: true })
    .map("business_users");
});

export const SubExpertise = createModel("SubExpertiseModel", (model) => {
  model
    .mixin(Entity)
    .string("sub_category_id")
    .string("business_user_id")
    .relation("sub_category", ServiceSubCategory, {
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

export const REAgent = createModel("REAgentModel", (model) => {
  model
    .string("id", { id: true })
    .boolean("is_licensed")
    .string("re_num")
    .string("re_name")
    .string("re_phone")
    .string("re_licensed_agent_name")
    .relation("base", BusinessUser, one_to_one)
    .relation("properties", REProperty, { list: true })
    .map("re_agents");
});

export const HSProvider = createModel("HSProviderModel", (model) => {
  model
    .string("id", { id: true })
    .string("business_registration_num")
    .relation("base", BusinessUser, one_to_one)
    .relation("example_images", HSExampleImage, { list: true })
    .map("hs_providers");
});

export const BusinessCertificationImage = createModel(
  "BusinessCertificationImageModel",
  (model) => {
    model
      .mixin(Entity)
      .string("business_user_id")
      .string("url")
      .relation("business_user", BusinessUser, {
        fields: ["business_user_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .map("business_certification_images");
  }
);

export const HSExampleImage = createModel("HSExampleImageModel", (model) => {
  model
    .mixin(Entity)
    .string("hs_provider_id")
    .string("url")
    .relation("hs_provider", HSProvider, {
      fields: ["hs_provider_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .map("hs_example_images");
});
