import { Entity } from "../mixins";
import { GenderType, OauthType } from "../enums";
import { createModel } from "schemix";
import { BusinessUser, Customer } from "./user";

export const OauthAccount = createModel("OauthAccountModel", (model) => {
  model
    .mixin(Entity)
    .enum("oauth_type", OauthType)
    .string("oauth_sub")
    .string("business_user_id", { optional: true })
    .string("customer_id", { optional: true })
    .string("name", { optional: true })
    .string("email", { optional: true })
    .string("phone", { optional: true })
    .string("profile_image_url", { optional: true })
    .string("birth", { optional: true })
    .enum("gender", GenderType, { optional: true })
    .string("address_first", { optional: true })
    .string("address_second", { optional: true })
    .relation("business_user", BusinessUser, {
      optional: true,
      fields: ["business_user_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("customer", Customer, {
      optional: true,
      fields: ["customer_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .map("oauth_accounts");
});
