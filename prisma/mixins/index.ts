import { createMixin } from "schemix";

export const DateTime = createMixin((mixin) => {
  mixin.dateTime("created_at", { raw: "@database.Timestamptz" });
});
