import { Omit } from "@TYPE";
import { ICategory } from "./base";

export type IServiceCategory = IServiceCategory.ISuper | IServiceCategory.ISub;

export namespace IServiceCategory {
  export type Level = "super" | "sub";
  export type Type = "RE" | "HS";

  export interface IBase<L extends Level> extends ICategory {
    readonly level: L;
  }

  export interface ISub extends IBase<"sub"> {
    readonly super_category: ISub.ISuper;
  }

  export namespace ISub {
    export type ISuper = Omit<IServiceCategory.ISuper, "sub_categories">;
  }

  export interface ISuper extends IBase<"super"> {
    readonly type: Type;
    readonly sub_categories: ISuper.ISub[];
  }

  export namespace ISuper {
    export type ISub = Omit<IServiceCategory.ISub, "super_category">;
  }

  export interface ISearch {
    /**
     * 서비스 카테고리 조회 필터링 기준(최소 1개 필요)
     * - RE 부동산 분야
     * - HS 생활서비스 분야
     *
     * @minItems 1
     */
    type: Type[];
  }
}
