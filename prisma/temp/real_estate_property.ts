import { createModel } from "schemix";
import { RealEstateAgent } from "./user";

export const RealEstateProperty = createModel(
  "RealEstatePropertyModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("name")
      .string("main_image_url")
      .string("agent_id")
      .relation("agent", RealEstateAgent, {
        fields: ["agent_id"],
        references: ["id"],
        onUpdate: "NoAction",
        onDelete: "NoAction"
      })
      .map("real_estate_properties");
  }
);
