-- CreateEnum
CREATE TYPE "BusinessRateType" AS ENUM ('all', 'HS', 'RE');

-- CreateTable
CREATE TABLE "business_rates" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "rater_id" TEXT NOT NULL,
    "ratee_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "score" SMALLINT NOT NULL,

    CONSTRAINT "business_rates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_rate_categories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "business_type" "BusinessRateType" NOT NULL,

    CONSTRAINT "business_rate_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "business_rate_categories_name_key" ON "business_rate_categories"("name");

-- AddForeignKey
ALTER TABLE "business_rates" ADD CONSTRAINT "business_rates_rater_id_fkey" FOREIGN KEY ("rater_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_rates" ADD CONSTRAINT "business_rates_ratee_id_fkey" FOREIGN KEY ("ratee_id") REFERENCES "business_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_rates" ADD CONSTRAINT "business_rates_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "business_rate_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
