import { IDateTime, IPage } from "@DTO/common";
import { IREAgent } from "@DTO/user/re_agent";

export interface IREProperty extends IDateTime {
  readonly id: string;
  readonly name: string;
  readonly main_image_url: string;
  readonly agent: IREProperty.IAgent;
  readonly category: IREProperty.ICategory;
}

export namespace IREProperty {
  export type IAgent = Pick<
    IREAgent,
    "id" | "name" | "profile_image_url" | "super_expertise"
  >;
  export interface ICategory {
    readonly id: string;
    readonly name: string;
  }
  export interface ISearch extends IPage {
    agent_id?: string;
    super_category_name?: string;
    sub_category_name?: string;
  }
}
