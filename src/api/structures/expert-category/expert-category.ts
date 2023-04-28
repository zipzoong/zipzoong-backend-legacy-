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
    filter: BusinessType[];
  }
}
