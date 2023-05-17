import { createEnum } from "schemix";

export const GenderType = createEnum("GenderType", (Enum) => {
  Enum.addValue("female").addValue("male").addValue("other");
});

export const OauthType = createEnum("OauthType", (Enum) => {
  Enum.addValue("kakao").addValue("naver");
});

export const ServiceType = createEnum("ServiceType", (Enum) => {
  Enum.addValue("HS").addValue("RE");
});

export const AgreementTargetType = createEnum("AgreementTargetType", (Enum) => {
  Enum.addValue("all")
    .addValue("customer")
    .addValue("business")
    .addValue("HS")
    .addValue("RE");
});

export const RateTargetType = createEnum("RateTargetType", (Enum) => {
  Enum.addValue("all").addValue("HS").addValue("RE");
});

export const FocusCareStatus = createEnum("FocusCareStatus", (Enum) => {
  Enum.addValue("pending")
    .addValue("caring")
    .addValue("cared")
    .addValue("cancelled");
});
