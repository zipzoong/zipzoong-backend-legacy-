import { createModel } from "schemix";
import { Entity } from "../mixins";

export const PhoneVerification = createModel(
  "PhoneVerificationModel",
  (model) => {
    model
      .mixin(Entity)
      .string("phone")
      .string("code")
      .string("message_id")
      .map("phone_verifications");
  }
);
