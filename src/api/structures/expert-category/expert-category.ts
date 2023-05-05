export type IExpertCategory = IExpertCategory.Super | IExpertCategory.Sub;

export namespace IExpertCategory {
  export type Type = "super" | "sub";
  export type BusinessType = "RE" | "HS";

  export interface IBase<T extends Type> {
    readonly type: T;
    readonly id: string;
    readonly name: string;
  }

  export interface Sub extends IBase<"sub"> {}

  export interface Super extends IBase<"super"> {
    readonly business_type: BusinessType;
    readonly sub_categories: Sub[];
  }

  export interface ISuperSearch {
    /**
     * 전문 분야 카테고리 조회 필터링 기준(최소 1개 필요)
     * - RE 공인중개사 대상 약관
     * - HS 생활서비스 대상 약관
     *
     * @minItems 1
     */
    filter: BusinessType[];
  }
}
