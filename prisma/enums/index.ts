import { createEnum } from "schemix";

export const GenderType = createEnum("GenderType", (Enum) => {
  Enum.addValue("female").addValue("male").addValue("other");
});

export const OauthType = createEnum("OauthType", (Enum) => {
  Enum.addValue("kakao").addValue("naver");
});
