import { ITokens } from "@DTO/auth";
import { IPaginatedResponse } from "@DTO/common";
import { IBusinessUser } from "@DTO/user/business_user";
import { IHSProvider } from "@DTO/user/hs_provider";
import { TypedParam, TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";
import { HSProviderService } from "@PROVIDER/services/user/hs_provider";
import { HSProviderToken } from "../decorators";

@Controller("users/hs-providers")
export class HSProvidersController {
  /**
   * @summary 생활서비스 제공자 목록 조회 API
   * @tag hs-providers
   * @tag users
   * @param query 필터링 기준
   * @return 생활서비스 제공자 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IBusinessUser.ISearch
  ): Promise<IPaginatedResponse<IHSProvider>> {
    return HSProviderService.getList(query);
  }

  /**
   * @summary 생활서비스 제공자 내 정보 조회 API
   * @tag hs-providers
   * @tag users
   * @return 생활서비스 제공자 내 정보
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @Get("me")
  get(
    @HSProviderToken()
    { user_id }: ITokens.IUserPayload<"home service provider">
  ): Promise<IHSProvider.IPrivate> {
    return HSProviderService.getMe(user_id);
  }

  /**
   * @summary 생활서비스 제공자 조회 API
   * @tag hs-providers
   * @tag users
   * @param provider_id 생활서비스 제공자 id
   * @return 생활서비스 제공자 정보
   * @throw 404 Not Found
   */
  @Get(":provider_id")
  getOne(@TypedParam("provider_id") provider_id: string): Promise<IHSProvider> {
    return HSProviderService.getOne(provider_id);
  }
}
