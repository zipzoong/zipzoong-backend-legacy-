import { IPage, IPaginatedResponse } from "@DTO/common";
import { IHSProvider } from "@DTO/user";
import { TypedParam, TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";

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
    @TypedQuery() query: IPage
  ): Promise<IPaginatedResponse<IHSProvider.IResponse>> {
    throw Error();
  }

  /**
   * @summary 생활서비스 제공자 내 정보 조회 API
   * @tag hs-providers
   * @tag users
   * @return 생활서비스 제공자 내 정보
   * @throw 401 Unauthorized
   * @throw 404 Not Found
   */
  @Get("me")
  getMe(): Promise<IHSProvider.IPrivateResponse> {
    throw Error();
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
  getOne(
    @TypedParam("provider_id") provider_id: string
  ): Promise<IHSProvider.IResponse> {
    throw Error();
  }
}
