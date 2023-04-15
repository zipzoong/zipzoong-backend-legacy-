import { IAccessor } from "@DTO/user/accessor";
import { TypedBody, TypedParam } from "@nestia/core";
import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AccessorService } from "@APP/user";
import { AuthGuard } from "@devts/nestjs-auth";

@Controller()
export class AccessorController {
  /**
   * oauth 로그인 API
   *
   * @param body oauth code & oauth type
   * @returns 사용자 인증 정보
   */
  @Post("sign-in/oauth")
  signIn(
    @TypedBody() body: IAccessor.IOauthSignIn,
    @TypedParam("test") test: string
  ): Promise<IAccessor> {
    return AccessorService.signIn(body);
  }

  @UseGuards(AuthGuard("kakao"))
  @Get("login")
  login() {}

  @UseGuards(AuthGuard("kakao"))
  @Get("oauth")
  redirect() {}
}
