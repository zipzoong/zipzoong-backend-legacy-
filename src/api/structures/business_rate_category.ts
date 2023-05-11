export interface IBusinessRateCategory {
  readonly id: string;
  readonly name: string;
  readonly business_type: IBusinessRateCategory.Type;
}

export namespace IBusinessRateCategory {
  export type Type = "all" | "RE" | "HS";

  export interface ISearch {
    business_type: Type[];
  }
}
