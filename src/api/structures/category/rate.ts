import { ICategory } from "./base";

export interface IRateCategory extends ICategory {
  readonly target_type: IRateCategory.TargetType;
}

export namespace IRateCategory {
  export type TargetType = "all" | "RE" | "HS";

  export interface ISearch {
    /**
     * 사업자 평가 카테고리 검색 조건 (최소 1개 필요)
     *
     * - all 전체
     *
     * @minItems 1
     */
    target_type: TargetType[];
  }
}
