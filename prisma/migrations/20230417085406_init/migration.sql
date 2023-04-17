-- CreateTable
CREATE TABLE "real_estate_properties" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "main_image_url" TEXT NOT NULL,
    "agent_id" TEXT NOT NULL,

    CONSTRAINT "real_estate_properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_care_specialized_super_fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "home_care_specialized_super_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_care_specialized_sub_fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "super_id" TEXT NOT NULL,

    CONSTRAINT "home_care_specialized_sub_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "real_estate_specialized_super_fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "real_estate_specialized_super_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "real_estate_specialized_sub_fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "super_id" TEXT NOT NULL,

    CONSTRAINT "real_estate_specialized_sub_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_rates" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "rater_id" TEXT NOT NULL,
    "ratee_id" TEXT NOT NULL,
    "rate" SMALLINT NOT NULL,

    CONSTRAINT "business_rates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_rate_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "business_rate_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_reviews" (
    "id" TEXT NOT NULL,
    "reviewer_id" TEXT NOT NULL,
    "reviewee_id" TEXT NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "business_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_certifications" (
    "id" TEXT NOT NULL,
    "business_user_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "business_certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accessors" (
    "id" TEXT NOT NULL,
    "oauth_sub" TEXT NOT NULL,
    "oauth_type" TEXT NOT NULL,
    "business_user_id" TEXT,
    "customer_id" TEXT,

    CONSTRAINT "accessors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "email_verified" BOOLEAN NOT NULL,
    "phone" TEXT,
    "phone_verified" BOOLEAN NOT NULL,
    "address_first" TEXT,
    "address_second" TEXT,
    "profile_image_url" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "birth" TEXT,
    "gender" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_users" (
    "id" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL,
    "introduction_title" TEXT NOT NULL,
    "introduction_content" TEXT NOT NULL,

    CONSTRAINT "business_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "real_estate_agents" (
    "id" TEXT NOT NULL,
    "is_licensed" BOOLEAN,
    "real_estate_num" TEXT,
    "real_estate_name" TEXT,
    "real_estate_phone" TEXT,
    "licensed_agent_name" TEXT,
    "specialized_field_id" TEXT,

    CONSTRAINT "real_estate_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_care_companies" (
    "id" TEXT NOT NULL,
    "business_registration_num" TEXT,
    "specialized_field_id" TEXT,

    CONSTRAINT "home_care_companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_care_introduction_images" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "home_care_introduction_images_pkey" PRIMARY KEY ("id")
);

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
    "article_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,

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
    "comment_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "board_comment_contents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "home_care_specialized_super_fields_name_key" ON "home_care_specialized_super_fields"("name");

-- CreateIndex
CREATE UNIQUE INDEX "home_care_specialized_sub_fields_name_key" ON "home_care_specialized_sub_fields"("name");

-- CreateIndex
CREATE UNIQUE INDEX "real_estate_specialized_super_fields_name_key" ON "real_estate_specialized_super_fields"("name");

-- CreateIndex
CREATE UNIQUE INDEX "real_estate_specialized_sub_fields_name_key" ON "real_estate_specialized_sub_fields"("name");

-- CreateIndex
CREATE UNIQUE INDEX "business_rate_categories_name_key" ON "business_rate_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "accessors_oauth_type_oauth_sub_key" ON "accessors"("oauth_type", "oauth_sub");

-- CreateIndex
CREATE UNIQUE INDEX "boards_name_key" ON "boards"("name");

-- AddForeignKey
ALTER TABLE "real_estate_properties" ADD CONSTRAINT "real_estate_properties_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "real_estate_agents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "home_care_specialized_sub_fields" ADD CONSTRAINT "home_care_specialized_sub_fields_super_id_fkey" FOREIGN KEY ("super_id") REFERENCES "home_care_specialized_super_fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "real_estate_specialized_sub_fields" ADD CONSTRAINT "real_estate_specialized_sub_fields_super_id_fkey" FOREIGN KEY ("super_id") REFERENCES "real_estate_specialized_super_fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_rates" ADD CONSTRAINT "business_rates_rater_id_fkey" FOREIGN KEY ("rater_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_rates" ADD CONSTRAINT "business_rates_ratee_id_fkey" FOREIGN KEY ("ratee_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_rates" ADD CONSTRAINT "business_rates_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "business_rate_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_reviews" ADD CONSTRAINT "business_reviews_reviewer_id_fkey" FOREIGN KEY ("reviewer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_reviews" ADD CONSTRAINT "business_reviews_reviewee_id_fkey" FOREIGN KEY ("reviewee_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_certifications" ADD CONSTRAINT "business_certifications_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accessors" ADD CONSTRAINT "accessors_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accessors" ADD CONSTRAINT "accessors_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "real_estate_agents" ADD CONSTRAINT "real_estate_agents_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "real_estate_agents" ADD CONSTRAINT "real_estate_agents_specialized_field_id_fkey" FOREIGN KEY ("specialized_field_id") REFERENCES "real_estate_specialized_sub_fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "home_care_companies" ADD CONSTRAINT "home_care_companies_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "home_care_companies" ADD CONSTRAINT "home_care_companies_specialized_field_id_fkey" FOREIGN KEY ("specialized_field_id") REFERENCES "home_care_specialized_sub_fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "home_care_introduction_images" ADD CONSTRAINT "home_care_introduction_images_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "home_care_companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
