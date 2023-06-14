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
    export type IMiddle = Pick<
      IREPropertyCategory.IMiddle,
      "level" | "id" | "name" | "sub_categories"
    >;
  }

  export interface IMiddle extends IBase<"middle"> {
    readonly super_category: IMiddle.ISuper;
    readonly sub_categories: IMiddle.ISub[];
  }

  export namespace IMiddle {
    export type ISuper = Pick<
      IREPropertyCategory.ISuper,
      "level" | "id" | "name"
    >;
    export type ISub = Pick<IREPropertyCategory.ISub, "level" | "id" | "name">;
  }

  export interface ISub extends IBase<"sub"> {
    readonly middle_category: ISub.IMiddle;
  }

  export namespace ISub {
    export type IMiddle = Pick<
      IREPropertyCategory.IMiddle,
      "level" | "id" | "name" | "super_category"
    >;
  }
}
