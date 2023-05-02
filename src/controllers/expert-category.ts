import { IExpertCategory } from "@DTO/expert-category";
import { TypedParam, TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";
import { ExpertCategory } from "@PROVIDER/services/expert-category";

@Controller("expert-categories")
export class ExpertCategoriesController {
  /**
   * @summary 상위 전문 분야 목록 조회 API
   * @tag expert-categories
   * @param query 상위 전문 분야 필터링 조건
   * @return 상위 전문 분야 목록
   */
  @Get()
  getSuperCategoryList(
    @TypedQuery() query: IExpertCategory.ISuperSearch
  ): Promise<IExpertCategory.Super[]> {
    return ExpertCategory.getSuperCategoryList(query);
  }

  /**
   * @summary 상위 전문 분야 조회 API
   * @tag expert-categories
   * @param super_id 상위 전문 분야 id
   * @return 상위 전문 분야 정보
   * @throw 404 NotFound
   */
  @Get(":super_id")
  getSuperCategory(
    @TypedParam("super_id") super_id: string
  ): Promise<IExpertCategory.Super> {
    return ExpertCategory.getSuperCategory(super_id);
  }

  /**
   * @summary 하위 전문 분야 목록 조회 API
   * @tag expert-categories
   * @param super_id 상위 전문 분야 id
   * @return 하위 전문 분야 목록
   * @throw 404 NotFound
   */
  @Get(":super_id/sub-categories")
  getSubCategoryList(
    @TypedParam("super_id") super_id: string
  ): Promise<IExpertCategory.Sub[]> {
    return ExpertCategory.getSubCategoryList(super_id);
  }
}
