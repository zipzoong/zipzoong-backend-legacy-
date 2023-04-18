import { isNull, throwIfNull } from "@UTIL";
import { KakaoStrategy } from "./strategy/kakao.strategy";
import {
  InternalServerErrorException,
  UnauthorizedException
} from "@nestjs/common";
import { prisma } from "@INFRA/DB";
import { IAccessor, IUser } from "@DTO/user";
import { pipe } from "@fxts/core";
import { AccessorModel } from "@PRISMA";
import { Configuration } from "@INFRA/config";
import jwt from "jsonwebtoken";

export namespace AuthService {
  const kakao = new KakaoStrategy();

  export const getAccessToken = (
    payload: IAccessor.IAccessTokenPayload
  ): string =>
    jwt.sign(payload, Configuration.ACCESS_TOKEN_PRIVATE_KEY, {
      algorithm: "RS256",
      expiresIn: "1h"
    });

  const getAccessPayload =
    (user_type: IUser.Type) =>
    (model: AccessorModel): IAccessor.IAccessTokenPayload =>
      user_type === "customer"
        ? {
            user_type: user_type,
            is_temp: isNull(model.customer_id),
            id: model.customer_id ?? model.id
          }
        : {
            user_type: user_type,
            is_temp: isNull(model.business_user_id),
            id: model.business_user_id ?? model.id
          };

  export const signIn = async ({
    code,
    oauth_type,
    user_type
  }: IAccessor.ISignInBody): Promise<IAccessor> =>
    pipe(
      code,

      async (code) => {
        switch (oauth_type) {
          case "kakao":
            return kakao.getIdentity(await kakao.authorize(code));
        }
        throw new InternalServerErrorException("다른 Oauth 로그인 구현 필요");
      },

      ({ id }) =>
        prisma.accessorModel.findFirst({
          where: { oauth_type, oauth_sub: id + "" }
        }),

      throwIfNull(new UnauthorizedException("Accessor Not Found")),

      getAccessPayload(user_type),

      getAccessToken,

      (access_token) => ({ access_token })
    );
}
