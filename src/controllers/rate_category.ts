import { IRateCategory } from "@DTO/category/rate";
import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { RateCategory } from "@PROVIDER/rate_category";

@Controller("rate-categories")
export class RateCategoriesController {
  /**
   * @summary 별점 카테고리 목록 검색
   * @tag reviews
   * @tag categories
   * @param query 별점 카테고리 검색 조건
   * @returns 별점 카테고리 목록
   */
  @TypedRoute.Get()
  getList(
    @TypedQuery() query: IRateCategory.ISearch
  ): Promise<IRateCategory[]> {
    return RateCategory.Service.getList(query);
  }
}
