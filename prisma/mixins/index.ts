import { createMixin } from "schemix";

export const CreatedAt = createMixin((mixin) => {
  mixin.dateTime("created_at", { raw: "@database.Timestamptz" });
  mixin.dateTime("updated_at", { raw: "@database.Timestamptz" });
});

export const DeletedAt = createMixin((mixin) => {
  mixin
    .boolean("is_deleted")
    .dateTime("deleted_at", { optional: true, raw: "@database.Timestamptz" });
});
