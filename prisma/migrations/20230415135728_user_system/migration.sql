-- CreateTable
CREATE TABLE "authentications" (
    "id" TEXT NOT NULL,
    "oauth_sub" TEXT NOT NULL,
    "oauth_type" TEXT NOT NULL,
    "business_user_id" TEXT,
    "customer_id" TEXT,

    CONSTRAINT "authentications_pkey" PRIMARY KEY ("id")
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
    "profile_image" TEXT,

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
    "is_licensed" BOOLEAN NOT NULL,
    "real_estate_num" TEXT NOT NULL,
    "real_estate_name" TEXT NOT NULL,
    "real_estate_phone" TEXT NOT NULL,
    "licensed_agent_name" TEXT NOT NULL,
    "specialized_field_id" TEXT,

    CONSTRAINT "real_estate_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_care_companies" (
    "id" TEXT NOT NULL,
    "business_registration_num" TEXT NOT NULL,
    "specialized_field_id" TEXT,

    CONSTRAINT "home_care_companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authentications_oauth_sub_oauth_type_key" ON "authentications"("oauth_sub", "oauth_type");

-- AddForeignKey
ALTER TABLE "authentications" ADD CONSTRAINT "authentications_business_user_id_fkey" FOREIGN KEY ("business_user_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "authentications" ADD CONSTRAINT "authentications_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "real_estate_agents" ADD CONSTRAINT "real_estate_agents_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "home_care_companies" ADD CONSTRAINT "home_care_companies_id_fkey" FOREIGN KEY ("id") REFERENCES "business_users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
