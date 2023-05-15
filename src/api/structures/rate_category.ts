export interface IRateCategory {
  readonly id: string;
  readonly name: string;
  readonly business_type: IRateCategory.Type;
}

export namespace IRateCategory {
  export type Type = "all" | "RE" | "HS";

  export interface ISearch {
    /**
     * 사업자 평가 카테고리 검색 조건 (최소 1개 필요)
     *
     * - all 전체
     * - RE 공인중개사
     * - HS 생활서비스 전문가
     *
     * @minItems 1
     */
    business_type: Type[];
  }
}
