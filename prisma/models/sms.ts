import { createModel } from "schemix";
import { SMSType } from "../enums";
import { Entity } from "../mixins";
import { User } from "./user";

export const PhoneVerification = createModel(
  "PhoneVerificationModel",
  (model) => {
    model
      .mixin(Entity)
      .string("user_id")
      .string("phone")
      .string("code")
      .enum("sms_type", SMSType)
      .string("sms_message_id")
      .relation("user", User, {
        fields: ["user_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("phone_verifications");
  }
);
