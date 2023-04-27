import { createMixin } from "schemix";

export const CreatedAt = createMixin((mixin) => {
  mixin.dateTime("created_at", { raw: "@database.Timestamptz" });
});

export const UpdatedAt = createMixin((mixin) => {
  mixin.dateTime("updated_at", { raw: "@database.Timestamptz" });
});

export const DeletedAt = createMixin((mixin) => {
  mixin
    .boolean("is_deleted")
    .dateTime("deleted_at", { optional: true, raw: "@database.Timestamptz" });
});

export const Entity = createMixin((mixin) => {
  mixin
    .string("id", { id: true })
    .mixin(CreatedAt)
    .mixin(UpdatedAt)
    .mixin(DeletedAt);
});
