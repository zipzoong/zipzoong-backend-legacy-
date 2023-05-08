import { IPage } from "@DTO/common";
import { Omit } from "@TYPE";

export namespace IREPropertyCategory {
  export type Type = "super" | "middle" | "sub";

  export interface IBase<T extends Type> {
    readonly type: T;
    readonly id: string;
    readonly name: string;
  }

  export interface ISuper extends IBase<"super"> {
    readonly middle_categories: Omit<IMiddle, "super_category">[];
  }

  export interface IMiddle extends IBase<"middle"> {
    readonly super_category: Omit<ISuper, "middle_categories">;
    readonly sub_categories: Omit<ISub, "middle_category">[];
  }

  export namespace IMiddle {
    export interface ISearch extends IPage {
      super_category_name?: string;
    }
  }

  export interface ISub extends IBase<"sub"> {
    readonly middle_category: Omit<IMiddle, "sub_categories">;
  }

  export namespace ISub {
    export interface ISearch extends IMiddle.ISearch {
      middle_category_name?: string;
    }
  }
}
