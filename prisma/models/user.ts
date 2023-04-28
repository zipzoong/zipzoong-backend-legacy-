import { DeletedAt, Entity, UpdatedAt } from "../mixins";
import { createModel } from "schemix";
import { RelationalFieldOptions } from "schemix/dist/typings/prisma-type-options";
import {
  AgreementUserType,
  ExpertBusinessType,
  GenderType,
  OauthType
} from "../enums";

const one_to_one: RelationalFieldOptions = {
  fields: ["id"],
  references: ["id"],
  onUpdate: "NoAction",
  onDelete: "NoAction"
};

export const OauthAccessor = createModel("OauthAccessorModel", (model) => {
  model
    .mixin(Entity)
    .enum("oauth_type", OauthType)
    .string("oauth_sub")
    .string("business_user_id")
    .string("customer_id")
    .string("name", { optional: true })
    .string("email", { optional: true })
    .string("phone", { optional: true })
    .string("profile_image_url", { optional: true })
    .string("birth", { optional: true })
    .enum("gender", GenderType, { optional: true })
    .string("address_first", { optional: true })
    .string("address_second", { optional: true })
    .relation("business_user", BusinessUser, {
      fields: ["business_user_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("customer", Customer, {
      fields: ["customer_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .map("oauth_accessors");
});

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
    .relation("oauth_accessor", OauthAccessor, { list: true })
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
    .string("address_second")
    .string("profile_image_url")
    .relation("base", User, one_to_one)
    .relation("re_agent", REAgent, { optional: true })
    .relation("hs_provider", HSProvider, { optional: true })
    .relation("certifications", BusinessCertification, {
      list: true
    })
    .relation("super_expertise", SuperExpertise, { optional: true })
    .relation("sub_expertises", SubExpertise, { list: true })
    .relation("oauth_accessor", OauthAccessor, { list: true })
    .map("business_users");
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
    .map("re_agents");
});

export const HSProvider = createModel("HSProviderModel", (model) => {
  model
    .string("id", { id: true })
    .string("business_registration_num")
    .relation("base", BusinessUser, one_to_one)
    .relation("introduction_images", HSIntroductionImage, { list: true })
    .map("hs_providers");
});

export const BusinessCertification = createModel(
  "BusinessCertificationModel",
  (model) => {
    model
      .mixin(Entity)
      .string("business_user_id")
      .string("image_url")
      .relation("business_user", BusinessUser, {
        fields: ["business_user_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .map("business_certifications");
  }
);

export const HSIntroductionImage = createModel(
  "HSIntroductionImageModel",
  (model) => {
    model
      .mixin(Entity)
      .string("hs_provider_id")
      .string("image_url")
      .relation("hs_provider", HSProvider, {
        fields: ["hs_provider_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .map("hs_introduction_images");
  }
);

export const SuperExpertise = createModel("SuperExpertiseModel", (model) => {
  model
    .mixin(UpdatedAt)
    .string("id", { id: true })
    .string("business_user_id", { unique: true })
    .string("super_category_id")
    .relation("business_user", BusinessUser, {
      fields: ["business_user_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("category", ExpertSuperCategory, {
      fields: ["super_category_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .map("super_expertises");
});

export const SubExpertise = createModel("SubExpertiseModel", (model) => {
  model
    .mixin(Entity)
    .string("sub_category_id")
    .string("business_user_id")
    .relation("category", ExpertSubCategory, {
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
      .string("name", { unique: true })
      .string("super_id")
      .relation("super", ExpertSuperCategory, {
        fields: ["super_id"],
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
      .relation("subs", ExpertSubCategory, { list: true })
      .relation("expertises", SuperExpertise, { list: true })
      .map("expert_super_categories");
  }
);

export const Agreement = createModel("AgreementModel", (model) => {
  model
    .mixin(Entity)
    .string("title")
    .string("content")
    .enum("user_type", AgreementUserType)
    .relation("acceptances", AgreementAcceptance, { list: true })
    .map("agreements");
});

export const AgreementAcceptance = createModel(
  "AgreementAcceptanceModel",
  (model) => {
    model
      .mixin(Entity)
      .string("user_id")
      .string("agreement_id")
      .relation("user", User, {
        fields: ["user_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .relation("agreement", Agreement, {
        fields: ["agreement_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .unique({ fields: ["user_id", "agreement_id"] })
      .map("agreement_acceptances");
  }
);
