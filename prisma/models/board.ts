import { createModel } from "schemix";
import { User } from "./user";

export const Board = createModel("BoardModel", (model) => {
  model
    .string("id", { id: true })
    .string("name", { unique: true })
    .relation("articles", BoardArticle, { list: true })
    .map("boards");
});

export const BoardArticle = createModel("BoardArticleModel", (model) => {
  model
    .string("id", { id: true })
    .string("title")
    .string("author_id")
    .string("board_id")
    .relation("author", User, {
      fields: ["author_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("board", Board, {
      fields: ["board_id"],
      references: ["id"],
      onUpdate: "NoAction",
      onDelete: "NoAction"
    })
    .relation("contents", BoardArticleContent, { list: true })
    .relation("comments", BoardComment, { list: true })
    .map("board_articles");
});

export const BoardArticleContent = createModel(
  "BoardArticleContentModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("text")
      .string("article_id")
      .dateTime("created_at", { raw: "@database.Timestamptz" })
      .relation("article", BoardArticle, {
        fields: ["article_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("board_article_contents");
  }
);

export const BoardComment = createModel("BoardCommentModel", (model) => {
  model
    .string("id", { id: true })
    .string("author_id")
    .string("article_id")
    .relation("author", User, {
      fields: ["author_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("article", BoardArticle, {
      fields: ["article_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("contents", BoardCommentContent, { list: true })
    .map("board_comments");
});

export const BoardCommentContent = createModel(
  "BoardCommentContentModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("text")
      .string("comment_id")
      .dateTime("created_at", { raw: "@database.Timestamptz" })
      .relation("comment", BoardComment, {
        fields: ["comment_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("board_comment_contents");
  }
);
