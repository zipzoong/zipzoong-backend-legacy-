import { Omit } from "@TYPE";
import { ICategory } from "./base";

export type IREPropertyCategory =
  | IREPropertyCategory.ISuper
  | IREPropertyCategory.IMiddle
  | IREPropertyCategory.ISub;

export namespace IREPropertyCategory {
  export type Level = "super" | "middle" | "sub";

  export interface IBase<L extends Level> extends ICategory {
    readonly level: L;
  }

  export interface ISuper extends IBase<"super"> {
    readonly middle_categories: ISuper.IMiddle[];
  }

  export namespace ISuper {
    export type IMiddle = Omit<IREPropertyCategory.IMiddle, "super_category">;
  }

  export interface IMiddle extends IBase<"middle"> {
    readonly super_category: IMiddle.ISuper;
    readonly sub_categories: IMiddle.ISub[];
  }

  export namespace IMiddle {
    export type ISuper = Omit<IREPropertyCategory.ISuper, "middle_categories">;
    export type ISub = Omit<IREPropertyCategory.ISub, "middle_category">;
  }

  export interface ISub extends IBase<"sub"> {
    readonly middle_category: ISub.IMiddle;
  }

  export namespace ISub {
    export type IMiddle = Omit<IREPropertyCategory.IMiddle, "sub_categories">;
  }
}
