import { Omit } from "@TYPE";

export type IExpertCategory = IExpertCategory.ISuper | IExpertCategory.ISub;

export namespace IExpertCategory {
  export type Type = "super" | "sub";
  export type BusinessType = "RE" | "HS";

  export interface IBase<T extends Type> {
    readonly type: T;
    readonly id: string;
    readonly name: string;
  }

  export interface ISub extends IBase<"sub"> {
    readonly super_category: Omit<ISuper, "sub_categories">;
  }

  export interface ISuper extends IBase<"super"> {
    readonly business_type: BusinessType;
    readonly sub_categories: Omit<ISub, "super_category">[];
  }

  export namespace ISuper {
    export interface ISearch {
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

  export namespace ISub {
    export interface ISearch extends ISuper.ISearch {
      super_category_name?: string;
    }
  }
}
