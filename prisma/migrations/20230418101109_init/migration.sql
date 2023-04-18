-- CreateEnum
CREATE TYPE "GenderType" AS ENUM ('female', 'male', 'other');

-- CreateEnum
CREATE TYPE "OauthType" AS ENUM ('kakao', 'naver');

-- CreateTable
CREATE TABLE "oauth_accessors" (
    "id" TEXT NOT NULL,
    "oauth_sub" TEXT NOT NULL,
    "oauth_type" "OauthType" NOT NULL,
    "customer_id" TEXT,
    "business_user_id" TEXT,

    CONSTRAINT "oauth_accessors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "created_at" TIMESTAMPTZ NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "email_verified" BOOLEAN NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "profile_image_url" TEXT,
    "gender" "GenderType",
    "birth" TEXT,
    "address_first" TEXT,
    "address_second" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_users" (
    "id" TEXT NOT NULL,
    "profile_image_url" TEXT NOT NULL,
    "introduction_title" TEXT NOT NULL,
    "introduction_content" TEXT NOT NULL,

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
    "re_address_first" TEXT NOT NULL,
    "re_address_second" TEXT,

    CONSTRAINT "re_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hs_companies" (
    "id" TEXT NOT NULL,
    "business_num" TEXT NOT NULL,
    "address_first" TEXT NOT NULL,
    "address_second" TEXT,

    CONSTRAINT "hs_companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "temp_re_agents" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" BOOLEAN NOT NULL,
    "phone" TEXT,
    "phone_verified" BOOLEAN NOT NULL,
    "profile_image_url" TEXT,
    "address_first" TEXT,
    "address_second" TEXT,
    "introduction_title" TEXT,
    "introduction_content" TEXT,
    "is_licensed" BOOLEAN,
    "re_num" TEXT,
    "re_name" TEXT,
    "re_phone" TEXT,
    "re_licensed_agent_name" TEXT,

    CONSTRAINT "temp_re_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "temp_hs_companies" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" BOOLEAN NOT NULL,
    "phone" TEXT,
    "phone_verified" BOOLEAN NOT NULL,
    "profile_image_url" TEXT,
    "address_first" TEXT,
    "address_second" TEXT,
    "introduction_title" TEXT,
    "introduction_content" TEXT,
    "business_num" TEXT,

    CONSTRAINT "temp_hs_companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "oauth_accessors_oauth_type_oauth_sub_key" ON "oauth_accessors"("oauth_type", "oauth_sub");

-- AddForeignKey
ALTER TABLE "oauth_accessors" ADD CONSTRAINT "oauth_accessors_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "oauth_accessors" ADD CONSTRAINT "oauth_accessors_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "re_agents" ADD CONSTRAINT "re_agents_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hs_companies" ADD CONSTRAINT "hs_companies_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "temp_re_agents" ADD CONSTRAINT "temp_re_agents_id_fkey" FOREIGN KEY ("id") REFERENCES "oauth_accessors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "temp_hs_companies" ADD CONSTRAINT "temp_hs_companies_id_fkey" FOREIGN KEY ("id") REFERENCES "oauth_accessors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
