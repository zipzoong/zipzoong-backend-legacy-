-- CreateTable
CREATE TABLE "home_care_introduction_images" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "home_care_introduction_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "real_estate_properties" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "main_image_url" TEXT NOT NULL,
    "agent_id" TEXT NOT NULL,

    CONSTRAINT "real_estate_properties_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "home_care_introduction_images" ADD CONSTRAINT "home_care_introduction_images_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "home_care_companies"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "real_estate_properties" ADD CONSTRAINT "real_estate_properties_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "real_estate_agents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
