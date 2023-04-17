import { createModel } from "schemix";
import { BusinessUser } from "./user";

export const BusinessCertification = createModel(
  "BusinessCertificationModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("business_user_id")
      .string("image_url")
      .relation("user", BusinessUser, {
        fields: ["business_user_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("business_certifications");
  }
);
