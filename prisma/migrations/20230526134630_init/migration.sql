-- CreateEnum
CREATE TYPE "GenderType" AS ENUM ('female', 'male', 'other');

-- CreateEnum
CREATE TYPE "OauthType" AS ENUM ('kakao', 'naver');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('HS', 'RE');

-- CreateEnum
CREATE TYPE "AgreementTargetType" AS ENUM ('all', 'customer', 'business', 'HS', 'RE');

-- CreateEnum
CREATE TYPE "ZipzoongCareStatus" AS ENUM ('pending', 'caring', 'cared', 'cancelled');

-- CreateTable
CREATE TABLE "re_properties" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "main_image_url" TEXT NOT NULL,
    "re_agent_id" TEXT NOT NULL,

    CONSTRAINT "re_properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "re_property_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "re_property_id" TEXT NOT NULL,
    "sub_category_id" TEXT NOT NULL,

    CONSTRAINT "re_property_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "re_property_sub_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "middle_category_id" TEXT NOT NULL,

    CONSTRAINT "re_property_sub_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "re_property_middle_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "super_category_id" TEXT NOT NULL,

    CONSTRAINT "re_property_middle_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "re_property_super_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,

    CONSTRAINT "re_property_super_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "reviewer_id" TEXT NOT NULL,
    "reviewee_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" SMALLINT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review_stats" (
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "review_cnt" DECIMAL(65,30) NOT NULL,
    "rating_sum" DECIMAL(65,30) NOT NULL,
    "reviewee_id" TEXT NOT NULL,

    CONSTRAINT "review_stats_pkey" PRIMARY KEY ("reviewee_id")
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
    "is_required" BOOLEAN NOT NULL,
    "target_type" "AgreementTargetType" NOT NULL,

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

-- CreateTable
CREATE TABLE "service_sub_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "super_category_id" TEXT NOT NULL,

    CONSTRAINT "service_sub_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_super_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "type" "ServiceType" NOT NULL,

    CONSTRAINT "service_super_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zipzoong_care_requests" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "care_start_date" DATE NOT NULL,
    "care_end_date" DATE NOT NULL,
    "detail" TEXT NOT NULL,
    "status" "ZipzoongCareStatus" NOT NULL,
    "requester_id" TEXT NOT NULL,

    CONSTRAINT "zipzoong_care_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zipzoong_care_service_checks" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "service_super_category_id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,

    CONSTRAINT "zipzoong_care_service_checks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zipzoong_care_consultation_time_checks" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "start_time" TIMETZ NOT NULL,
    "end_time" TIMETZ NOT NULL,
    "request_id" TEXT NOT NULL,

    CONSTRAINT "zipzoong_care_consultation_time_checks_pkey" PRIMARY KEY ("id")
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

    CONSTRAINT "business_users_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "hs_example_images" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "hs_provider_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "hs_example_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth_accounts" (
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

    CONSTRAINT "oauth_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phone_verifications" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "phone" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL,

    CONSTRAINT "phone_verifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "re_property_super_categories_name_key" ON "re_property_super_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "agreement_acceptances_user_id_agreement_id_key" ON "agreement_acceptances"("user_id", "agreement_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_super_categories_name_key" ON "service_super_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sub_expertises_sub_category_id_business_user_id_key" ON "sub_expertises"("sub_category_id", "business_user_id");

-- AddForeignKey
ALTER TABLE "re_properties" ADD CONSTRAINT "re_properties_re_agent_id_fkey" FOREIGN KEY ("re_agent_id") REFERENCES "re_agents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "re_property_categories" ADD CONSTRAINT "re_property_categories_re_property_id_fkey" FOREIGN KEY ("re_property_id") REFERENCES "re_properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "re_property_categories" ADD CONSTRAINT "re_property_categories_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "re_property_sub_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "re_property_sub_categories" ADD CONSTRAINT "re_property_sub_categories_middle_category_id_fkey" FOREIGN KEY ("middle_category_id") REFERENCES "re_property_middle_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "re_property_middle_categories" ADD CONSTRAINT "re_property_middle_categories_super_category_id_fkey" FOREIGN KEY ("super_category_id") REFERENCES "re_property_super_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reviewer_id_fkey" FOREIGN KEY ("reviewer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reviewee_id_fkey" FOREIGN KEY ("reviewee_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review_stats" ADD CONSTRAINT "review_stats_reviewee_id_fkey" FOREIGN KEY ("reviewee_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "agreement_acceptances" ADD CONSTRAINT "agreement_acceptances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "agreement_acceptances" ADD CONSTRAINT "agreement_acceptances_agreement_id_fkey" FOREIGN KEY ("agreement_id") REFERENCES "agreements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "service_sub_categories" ADD CONSTRAINT "service_sub_categories_super_category_id_fkey" FOREIGN KEY ("super_category_id") REFERENCES "service_super_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "zipzoong_care_requests" ADD CONSTRAINT "zipzoong_care_requests_requester_id_fkey" FOREIGN KEY ("requester_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "zipzoong_care_service_checks" ADD CONSTRAINT "zipzoong_care_service_checks_service_super_category_id_fkey" FOREIGN KEY ("service_super_category_id") REFERENCES "service_super_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "zipzoong_care_service_checks" ADD CONSTRAINT "zipzoong_care_service_checks_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "zipzoong_care_requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "zipzoong_care_consultation_time_checks" ADD CONSTRAINT "zipzoong_care_consultation_time_checks_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "zipzoong_care_requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_expertises" ADD CONSTRAINT "sub_expertises_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "service_sub_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_expertises" ADD CONSTRAINT "sub_expertises_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "re_agents" ADD CONSTRAINT "re_agents_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hs_providers" ADD CONSTRAINT "hs_providers_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_certification_images" ADD CONSTRAINT "business_certification_images_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hs_example_images" ADD CONSTRAINT "hs_example_images_hs_provider_id_fkey" FOREIGN KEY ("hs_provider_id") REFERENCES "hs_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "oauth_accounts" ADD CONSTRAINT "oauth_accounts_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "oauth_accounts" ADD CONSTRAINT "oauth_accounts_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
