import {
  IDateTime,
  IPage,
  IPaginatedResponse as IPaginated
} from "@DTO/common";
import { IREAgent } from "@DTO/user/re_agent";
import { Mutable, Omit } from "@TYPE";
import { IREPropertyCategory } from "./category/re_property";

export type IREProperty =
  | IREProperty.ISummary
  | IREProperty.IPublic
  | IREProperty.IPrivate;

export namespace IREProperty {
  export type Mode = "summary" | "public" | "private";

  export interface IBase<M extends Mode> extends IDateTime {
    readonly id: string;
    readonly mode: M;
    readonly name: string;
    readonly main_image_url: string;
    readonly re_agent: IREProperty.IAgent;
    readonly sub_categories: IREProperty.ISubCategory[];
  }

  // 아직 자체적으로 쓸데는 없고 다른 DTO에서 필요할 때, 사용하려고 만듬
  export type ISummary = Omit<IBase<"summary">, "re_agent">;

  export interface IPublic extends IBase<"public"> {}

  export interface IPrivate extends IBase<"private"> {
    /** 게시 상태 */
    readonly is_visible: boolean;
  }

  export type IAgent = Pick<
    IREAgent.ISummary,
    | "id"
    | "name"
    | "profile_image_url"
    | "introduction"
    | "is_licensed"
    | "expertise"
  >;

  export interface ISuperCategory extends IREPropertyCategory.IBase<"super"> {}

  export interface IMiddleCategory extends IREPropertyCategory.IBase<"middle"> {
    readonly super_category: ISuperCategory;
  }

  export interface ISubCategory extends IREPropertyCategory.IBase<"sub"> {
    readonly middle_category: IMiddleCategory;
  }

  export interface ISearch extends IPage {
    super_category_id?: string;
    middle_category_id?: string;
    sub_category_id?: string;
  }

  export interface ICreate
    extends Omit<
      Mutable<IPrivate>,
      | "id"
      | "mode"
      | "created_at"
      | "updated_at"
      | "re_agent"
      | "sub_categories"
    > {
    re_agent_id: string;
    sub_category_ids: string[];
  }

  export type ICreateRequest = Omit<ICreate, "re_agent_id">;

  export interface ICreateManyRequest {
    /**
     * @minItems 1
     * @maxItems 10
     */
    data: ICreateRequest[];
  }

  export type IPaginatedResponse = IPaginated<IREProperty.IPublic>;
}
