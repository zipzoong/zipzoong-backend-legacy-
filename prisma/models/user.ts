import { DateTime } from "../mixins";
import { GenderType, OauthType } from "../enums";
import { createModel } from "schemix";
import { RelationalFieldOptions } from "schemix/dist/typings/prisma-type-options";

const one_to_one: RelationalFieldOptions = {
  fields: ["id"],
  references: ["id"],
  onUpdate: "NoAction",
  onDelete: "NoAction"
};

/**
 * 소셜 계정 정보 엔티티
 *
 * customer 계정 하나와 사업자 계정 하나를 연동할 수 있음
 */
export const OauthAccessor = createModel("AccessorModel", (model) => {
  model
    .string("id", { id: true })
    .string("oauth_sub")
    .enum("oauth_type", OauthType)
    .string("customer_id", { optional: true })
    .string("business_user_id", { optional: true })

    .unique({ fields: ["oauth_type", "oauth_sub"] })
    .relation("customer", Customer, {
      optional: true,
      fields: ["customer_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("business_user", BusinessUser, {
      optional: true,
      fields: ["business_user_id"],
      references: ["id"],
      onDelete: "NoAction",
      onUpdate: "NoAction"
    })
    .relation("temp_re_agents", TempREAgent, { optional: true })
    .relation("temp_hs_company", TempHSCompany, { optional: true })
    .map("oauth_accessors");
});

/**
 * 일반 로그인 모델 추가 필요
 * NormalAccessor
 */

/**
 * 사용자 공통 정보
 */
export const User = createModel("UserModel", (model) => {
  model
    .mixin(DateTime)
    .string("id", { id: true })
    .string("name")
    .string("phone")
    .string("email", { optional: true })
    .boolean("email_verified")
    .relation("customer", Customer, { optional: true })
    .relation("business_user", BusinessUser, { optional: true })
    .map("users");
});

/**
 * 고객 추가 정보
 */
export const Customer = createModel("CustomerModel", (model) => {
  model
    .string("id", { id: true })
    .string("profile_image_url", { optional: true })
    .enum("gender", GenderType, { optional: true })
    .string("birth", { optional: true })
    .string("address_first", { optional: true })
    .string("address_second", { optional: true })
    .relation("base", User, one_to_one)
    .relation("oauth_accessors", OauthAccessor, { list: true })
    .map("customers");
});

/**
 * 사업자 공통 정보
 */
export const BusinessUser = createModel("BusinessUserModel", (model) => {
  model
    .string("id", { id: true })
    .string("profile_image_url")
    .string("introduction_title")
    .string("introduction_content")
    .relation("base", User, one_to_one)
    .relation("re_agent", REAgent, { optional: true })
    .relation("hs_company", HSCompany, { optional: true })
    .relation("oauth_accessors", OauthAccessor, { list: true })
    .map("business_users");
});

/**
 * 공인중개사 추가 정보
 */
export const REAgent = createModel("REAgentModel", (model) => {
  model
    .string("id", { id: true })
    .boolean("is_licensed")
    .string("re_num")
    .string("re_name")
    .string("re_phone")
    .string("re_licensed_agent_name")
    .string("re_address_first")
    .string("re_address_second", { optional: true })
    .relation("base", BusinessUser, one_to_one)
    .map("re_agents");
});

/**
 * 생활서비스 회사 추가 정보
 */
export const HSCompany = createModel("HSCompanyModel", (model) => {
  model
    .string("id", { id: true })
    .string("business_num")
    .string("address_first")
    .string("address_second", { optional: true })
    .relation("base", BusinessUser, one_to_one)
    .relation("introduction_images", CompanyIntroductionImages, { list: true })
    .map("hs_companies");
});

/**
 * 생활서비스 회사 소개 이미지 목록
 */
export const CompanyIntroductionImages = createModel(
  "HSCompanyIntroductionImageModel",
  (model) => {
    model
      .string("id", { id: true })
      .string("url")
      .string("company_id")
      .relation("company", HSCompany, {
        fields: ["company_id"],
        references: ["id"],
        onDelete: "NoAction",
        onUpdate: "NoAction"
      })
      .map("hs_company_introduction_images");
  }
);

/**
 * 공인중개사 임시 생성 테이블
 *
 * 필수 정보를 모두 입력하고 승인되면 관리자에 의해 공인중개사 정보가 추가됨
 */
export const TempREAgent = createModel("TempREAgentModel", (model) => {
  model
    .string("id", { id: true })
    .string("name", { optional: true })
    .string("email", { optional: true })
    .boolean("email_verified")
    .string("phone", { optional: true })
    .boolean("phone_verified")
    .string("profile_image_url", { optional: true })

    .string("address_first", { optional: true })
    .string("address_second", { optional: true })
    .string("introduction_title", { optional: true })
    .string("introduction_content", { optional: true })

    .boolean("is_licensed", { optional: true })
    .string("re_num", { optional: true })
    .string("re_name", { optional: true })
    .string("re_phone", { optional: true })
    .string("re_licensed_agent_name", { optional: true })

    .relation("oauth_accessor", OauthAccessor, one_to_one)
    .map("temp_re_agents");
});

/**
 * 생활서비스 회사 임시 생성 테이블
 *
 * 필수 정보를 모두 입력하고 승인되면 관리자에 의해 생활서비스 정보가 추가됨
 */
export const TempHSCompany = createModel("TempHSCompanyModel", (model) => {
  model
    .string("id", { id: true })
    .string("name", { optional: true })
    .string("email", { optional: true })
    .boolean("email_verified")
    .string("phone", { optional: true })
    .boolean("phone_verified")
    .string("profile_image_url", { optional: true })

    .string("address_first", { optional: true })
    .string("address_second", { optional: true })
    .string("introduction_title", { optional: true })
    .string("introduction_content", { optional: true })

    .string("business_num", { optional: true })

    .relation("oauth_accessor", OauthAccessor, one_to_one)
    .map("temp_hs_companies");
});

// 약관 동의 목록,전문 영역 관련 추가 구현 필요
