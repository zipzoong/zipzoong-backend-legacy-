export namespace IREPropertyCategory {
  export type Type = "super" | "middle" | "sub";

  export interface IBase<T extends Type> {
    readonly type: T;
    readonly id: string;
    readonly name: string;
  }

  export interface ISuper extends IBase<"super"> {
    readonly middle_categories: IMiddle[];
  }

  export interface IMiddle extends IBase<"middle"> {
    readonly sub_categories: ISub[];
  }

  export interface ISub extends IBase<"sub"> {}
}
