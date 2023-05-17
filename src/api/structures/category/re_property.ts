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
    readonly middle_categories: Omit<IMiddle, "super_category">[];
  }

  export interface IMiddle extends IBase<"middle"> {
    readonly super_category: Omit<ISuper, "middle_categories">;
    readonly sub_categories: Omit<ISub, "middle_category">[];
  }

  export interface ISub extends IBase<"sub"> {
    readonly middle_category: Omit<IMiddle, "sub_categories">;
  }
}
