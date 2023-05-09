import { IExpertCategory } from "@DTO/expert_category";
import { TypedParam, TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";
import { ExpertCategory } from "@PROVIDER/services/expert_category";

@Controller("expert-super-categories")
export class ExpertSuperCategoriesController {
  /**
   * @summary 상위 전문 분야 목록 조회
   * @tag expert-categories
   * @param query 전문 분야 상위 카테고리 필터링 조건
   * @return 전문 분야 상위 카테고리 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IExpertCategory.ISuper.ISearch
  ): Promise<IExpertCategory.ISuper[]> {
    return ExpertCategory.Super.getList(query);
  }

  /**
   * @summary 상위 전문 분야 조회
   * @tag expert-categories
   * @param super_category_id 상위 전문 분야 id
   * @return 상위 전문 분야 정보
   * @throw 404 NotFound
   */
  @Get(":super_category_id")
  getOne(
    @TypedParam("super_category_id") super_category_id: string
  ): Promise<IExpertCategory.ISuper> {
    return ExpertCategory.Super.getOne(super_category_id);
  }
}

@Controller("expert-sub-categories")
export class ExpertSubCategoriesController {
  /**
   * @summary 하위 전문 분야 목록 조회
   * @tag expert-categories
   * @param query 하위 전문 분야 필터링 조건
   * @return 하위 전문 분야 목록
   * @throw 404 NotFound
   */
  @Get()
  getList(
    @TypedQuery() query: IExpertCategory.ISub.ISearch
  ): Promise<IExpertCategory.ISub[]> {
    return ExpertCategory.Sub.getList(query);
  }

  /**
   * @summary 상위 전문 분야 조회
   * @tag expert-categories
   * @param sub_category_id 하위 전문 분야 id
   * @return 상위 전문 분야 정보
   * @throw 404 NotFound
   */
  @Get(":sub_category_id")
  getOne(
    @TypedParam("sub_category_id") sub_category_id: string
  ): Promise<IExpertCategory.ISuper> {
    return ExpertCategory.Super.getOne(sub_category_id);
  }
}
