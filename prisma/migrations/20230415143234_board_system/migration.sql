-- CreateTable
CREATE TABLE "boards" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board_articles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "board_id" TEXT NOT NULL,

    CONSTRAINT "board_articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board_article_contents" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "article_id" TEXT NOT NULL,

    CONSTRAINT "board_article_contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board_comments" (
    "id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "article_id" TEXT NOT NULL,

    CONSTRAINT "board_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board_comment_contents" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "comment_id" TEXT NOT NULL,

    CONSTRAINT "board_comment_contents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "boards_name_key" ON "boards"("name");

-- AddForeignKey
ALTER TABLE "board_articles" ADD CONSTRAINT "board_articles_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "board_articles" ADD CONSTRAINT "board_articles_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "boards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "board_article_contents" ADD CONSTRAINT "board_article_contents_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "board_articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "board_comments" ADD CONSTRAINT "board_comments_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "board_comments" ADD CONSTRAINT "board_comments_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "board_articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "board_comment_contents" ADD CONSTRAINT "board_comment_contents_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "board_comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
