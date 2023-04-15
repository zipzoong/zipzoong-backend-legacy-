import { Google } from "@devts/nestjs-auth";
import { IAccessor } from "@DTO/user/accessor";
import { UnauthorizedException } from "@nestjs/common";
import { throwIf } from "@UTIL";
import { pipe } from "rxjs";
import typia from "typia";
import { GoogleStrategy } from "./strategy/google.strategy";
import { KakaoStrategy } from "./strategy/kakao.strategy";

export namespace AccessorService {
  const google = new GoogleStrategy();
  const kakao = new KakaoStrategy();

  const signInGoogle = async (
    code: string
  ): Promise<IAccessor.IOauthProfile> => {
    const credentials = await google.authorize(code);
    const identity = await google.getIdentity(credentials);
    return pipe(
      throwIf(
        typia.createIs<Google.IdToken<"email" | "profile">>(),
        new UnauthorizedException("Insufficient user information.")
      ),
      google.transform
    )(identity);
  };

  const signInKakao = async (code: string) => {
    const { access_token, id_token } = await kakao.authorize(code);
  };

  export const signIn = async ({
    code
  }: IAccessor.IOauthSignIn): Promise<IAccessor> => {
    const profile = await signInGoogle(code);
    throw Error("Function is not implemented.");
  };
}
