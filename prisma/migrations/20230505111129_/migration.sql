-- CreateEnum
CREATE TYPE "GenderType" AS ENUM ('female', 'male', 'other');

-- CreateEnum
CREATE TYPE "OauthType" AS ENUM ('kakao', 'naver');

-- CreateEnum
CREATE TYPE "ExpertBusinessType" AS ENUM ('HS', 'RE');

-- CreateEnum
CREATE TYPE "AgreementUserType" AS ENUM ('all', 'customer', 'business', 'HS', 'RE');

-- CreateTable
CREATE TABLE "oauth_accessors" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "oauth_type" "OauthType" NOT NULL,
    "oauth_sub" TEXT NOT NULL,
    "business_user_id" TEXT,
    "customer_id" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "profile_image_url" TEXT,
    "birth" TEXT,
    "gender" "GenderType",
    "address_first" TEXT,
    "address_second" TEXT,

    CONSTRAINT "oauth_accessors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "birth" TEXT,
    "gender" "GenderType",
    "phone" TEXT,
    "address_first" TEXT,
    "address_second" TEXT,
    "profile_image_url" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_users" (
    "id" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL,
    "introduction_title" TEXT NOT NULL,
    "introduction_content" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address_first" TEXT NOT NULL,
    "address_second" TEXT,
    "profile_image_url" TEXT NOT NULL,
    "super_expertise_id" TEXT NOT NULL,

    CONSTRAINT "business_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "re_agents" (
    "id" TEXT NOT NULL,
    "is_licensed" BOOLEAN NOT NULL,
    "re_num" TEXT NOT NULL,
    "re_name" TEXT NOT NULL,
    "re_phone" TEXT NOT NULL,
    "re_licensed_agent_name" TEXT NOT NULL,

    CONSTRAINT "re_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hs_providers" (
    "id" TEXT NOT NULL,
    "business_registration_num" TEXT NOT NULL,

    CONSTRAINT "hs_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_certification_images" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "business_user_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "business_certification_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hs_introduction_images" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "hs_provider_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "hs_introduction_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_expertises" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "sub_category_id" TEXT NOT NULL,
    "business_user_id" TEXT NOT NULL,

    CONSTRAINT "sub_expertises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expert_sub_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "super_id" TEXT NOT NULL,

    CONSTRAINT "expert_sub_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expert_super_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "business_type" "ExpertBusinessType" NOT NULL,

    CONSTRAINT "expert_super_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agreements" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "user_type" "AgreementUserType" NOT NULL,

    CONSTRAINT "agreements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agreement_acceptances" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "user_id" TEXT NOT NULL,
    "agreement_id" TEXT NOT NULL,

    CONSTRAINT "agreement_acceptances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sub_expertises_sub_category_id_business_user_id_key" ON "sub_expertises"("sub_category_id", "business_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "expert_sub_categories_name_key" ON "expert_sub_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "expert_super_categories_name_key" ON "expert_super_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "agreement_acceptances_user_id_agreement_id_key" ON "agreement_acceptances"("user_id", "agreement_id");

-- AddForeignKey
ALTER TABLE "oauth_accessors" ADD CONSTRAINT "oauth_accessors_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "oauth_accessors" ADD CONSTRAINT "oauth_accessors_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_super_expertise_id_fkey" FOREIGN KEY ("super_expertise_id") REFERENCES "expert_super_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "re_agents" ADD CONSTRAINT "re_agents_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hs_providers" ADD CONSTRAINT "hs_providers_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_certification_images" ADD CONSTRAINT "business_certification_images_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hs_introduction_images" ADD CONSTRAINT "hs_introduction_images_hs_provider_id_fkey" FOREIGN KEY ("hs_provider_id") REFERENCES "hs_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_expertises" ADD CONSTRAINT "sub_expertises_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "expert_sub_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_expertises" ADD CONSTRAINT "sub_expertises_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "expert_sub_categories" ADD CONSTRAINT "expert_sub_categories_super_id_fkey" FOREIGN KEY ("super_id") REFERENCES "expert_super_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "agreement_acceptances" ADD CONSTRAINT "agreement_acceptances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "agreement_acceptances" ADD CONSTRAINT "agreement_acceptances_agreement_id_fkey" FOREIGN KEY ("agreement_id") REFERENCES "agreements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
