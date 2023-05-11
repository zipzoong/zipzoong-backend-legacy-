import { ITokens } from "@DTO/auth";
import { IBusinessRatesStats } from "@DTO/business_rates_stats";
import { IPaginatedResponse } from "@DTO/common";
import { TypedBody, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { CustomerToken } from "./decorators";

@Controller("business-rates")
export class BusinessRatesController {
  /**
   * 별점 데이터를 생성하는 API로서 별점을 등록한다는 기능적인 의미를 담고 있다.
   *
   * customer 권한을 요구한다.
   *
   * @summary 별점 등록
   * @tag customers
   * @tag business_rates
   * @param body 별점 등록 정보
   * @throw Unauthorized
   * @throw Forbidden
   * @throw Not Found
   */
  @TypedRoute.Post()
  create(
    @TypedBody() body: IBusinessRatesStats.IRate.ICreate,
    @CustomerToken() payload: ITokens.IUserPayload<"customer">
  ): Promise<void> {
    throw Error();
  }
}

@Controller("business-rates/stats")
export class BusinessRatesStatsController {
  /**
   * @summary 사업자 별점 평균 목록 검색
   * @tag business_rates
   * @tag stats
   * @param query 별점 목록 검색 기준
   * @return 별점 평균 목록
   */
  @TypedRoute.Get()
  getList(
    @TypedQuery()
    query: IBusinessRatesStats.ISearch
  ): Promise<IPaginatedResponse<IBusinessRatesStats>> {
    throw Error();
  }
}
