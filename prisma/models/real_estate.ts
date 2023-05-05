import { Entity } from "../mixins";
import { createModel } from "schemix";
import { REAgent } from "./user";

export const REProperty = createModel("REProertyModel", (model) => {
  model
    .mixin(Entity)
    .string("name")
    .string("main_image_url")
    .string("agent_id")
    .relation("agent", REAgent, {
      fields: ["agent_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .map("re_properties");
});
