import { IAuthentication } from "@DTO/auth";
import { UnauthorizedException } from "@nestjs/common";
import { Oauth } from "@PROVIDER/authentication/oauth";

import { mock as mk } from "node:test";
import typia from "typia";

export const mock = () => {
  const createProfile = typia.createRandom<IAuthentication.IProfile>();
  mk.method(Oauth, "kakao").mock.mockImplementation(async (code: string) => {
    if (code === "invalid code")
      throw new UnauthorizedException("Authentication Fail");
    return {
      oauth_sub: code,
      profile: createProfile()
    };
  });
};
