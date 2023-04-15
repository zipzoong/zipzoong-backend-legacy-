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

-- CreateIndex
CREATE UNIQUE INDEX "home_care_specialized_super_fields_name_key" ON "home_care_specialized_super_fields"("name");

-- CreateIndex
CREATE UNIQUE INDEX "home_care_specialized_sub_fields_name_key" ON "home_care_specialized_sub_fields"("name");

-- CreateIndex
CREATE UNIQUE INDEX "real_estate_specialized_super_fields_name_key" ON "real_estate_specialized_super_fields"("name");

-- CreateIndex
CREATE UNIQUE INDEX "real_estate_specialized_sub_fields_name_key" ON "real_estate_specialized_sub_fields"("name");

-- AddForeignKey
ALTER TABLE "real_estate_agents" ADD CONSTRAINT "real_estate_agents_specialized_field_id_fkey" FOREIGN KEY ("specialized_field_id") REFERENCES "real_estate_specialized_sub_fields"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "home_care_companies" ADD CONSTRAINT "home_care_companies_specialized_field_id_fkey" FOREIGN KEY ("specialized_field_id") REFERENCES "home_care_specialized_sub_fields"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "home_care_specialized_sub_fields" ADD CONSTRAINT "home_care_specialized_sub_fields_super_id_fkey" FOREIGN KEY ("super_id") REFERENCES "home_care_specialized_super_fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "real_estate_specialized_sub_fields" ADD CONSTRAINT "real_estate_specialized_sub_fields_super_id_fkey" FOREIGN KEY ("super_id") REFERENCES "real_estate_specialized_super_fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
