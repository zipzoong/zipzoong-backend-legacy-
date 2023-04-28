export interface IExpertSubCategory {
  readonly id: string;
  readonly name: string;
}

export interface IExpertSuperCategory {
  readonly id: string;
  readonly name: string;
  readonly business_type: "RE" | "HS";
  readonly sub_categories: IExpertSubCategory[];
}
