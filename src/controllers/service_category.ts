import { IServiceCategory } from "@DTO/category/service";
import { TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import ExpertCategory from "@PROVIDER/service_category";

@Controller("service-categories/super")
export class ServiceCategoriesController {
  /**
   * @summary 서비스 상위 카테고리 목록 검색
   * @tag service-categories
   * @param query 서비스 상위 카테고리 목록 검색 조건
   * @return 서비스 상위 카테고리 목록
   */
  @TypedRoute.Get()
  getList(
    @TypedQuery() query: IServiceCategory.ISearch
  ): Promise<IServiceCategory.ISuper[]> {
    return ExpertCategory.Service.Super.getList(query);
  }

  /**
   * @summary 서비스 상위 카테고리 조회
   * @tag service-categories
   * @param category_id 서비스 상위 카테고리 id
   * @return 서비스 상위 카테고리 정보
   * @throw 404 Not Found
   */
  @TypedRoute.Get(":super_category_id")
  getOne(
    @TypedParam("super_category_id") super_category_id: string
  ): Promise<IServiceCategory.ISuper> {
    return ExpertCategory.Service.Super.getOne(super_category_id);
  }
}
