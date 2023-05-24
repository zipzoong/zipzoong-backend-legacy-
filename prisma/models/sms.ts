import { createModel } from "schemix";
import { Entity } from "../mixins";

export const PhoneAuthentication = createModel(
  "PhoneAuthenticationModel",
  (model) => {
    model
      .mixin(Entity)
      .string("phone")
      .string("code")
      .string("message_id")
      .boolean("is_verified")
      .map("phone_authentications");
  }
);
