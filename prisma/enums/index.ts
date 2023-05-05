import { createEnum } from "schemix";

export const GenderType = createEnum("GenderType", (Enum) => {
  Enum.addValue("female").addValue("male").addValue("other");
});

export const OauthType = createEnum("OauthType", (Enum) => {
  Enum.addValue("kakao").addValue("naver");
});

export const ExpertBusinessType = createEnum("ExpertBusinessType", (Enum) => {
  Enum.addValue("HS").addValue("RE");
});

export const AgreementUserType = createEnum("AgreementUserType", (Enum) => {
  Enum.addValue("all")
    .addValue("customer")
    .addValue("business")
    .addValue("HS")
    .addValue("RE");
});
