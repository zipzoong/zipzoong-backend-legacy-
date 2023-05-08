import { IDateTime, IPage } from "@DTO/common";
import { IREAgent } from "@DTO/user/re_agent";
import { IREPropertyCategory } from "./re_property_category";

export interface IREProperty extends IDateTime {
  readonly id: string;
  readonly name: string;
  readonly main_image_url: string;
  readonly agent: IREProperty.IAgent;
  readonly sub_categories: IREProperty.ISubCategory[];
}

export namespace IREProperty {
  export type IAgent = Pick<
    IREAgent,
    "id" | "name" | "profile_image_url" | "expertise"
  >;

  export interface ISuperCategory extends IREPropertyCategory.IBase<"super"> {}

  export interface IMiddleCategory extends IREPropertyCategory.IBase<"middle"> {
    readonly super_category: ISuperCategory;
  }

  export interface ISubCategory extends IREPropertyCategory.IBase<"sub"> {
    readonly middle_category: IMiddleCategory;
  }

  export interface ISearch extends IPage {
    agent_id?: string;
    super_category_name?: string;
    middle_category_name?: string;
    sub_category_name?: string;
  }
}
