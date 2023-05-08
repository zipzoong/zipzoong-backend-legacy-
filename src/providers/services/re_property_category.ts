import { IPaginatedResponse } from "@DTO/common";
import { IREPropertyCategory } from "@DTO/real_estate/re_property_category";

export namespace REPropertyCategory {
  export namespace Super {
    export const getList = (
      input: IREPropertyCategory.ISuper.ISearch
    ): Promise<IPaginatedResponse<IREPropertyCategory.ISuper>> => {
      throw Error();
    };
    export const getOne = (
      category_id: string
    ): Promise<IREPropertyCategory.ISuper> => {
      throw Error();
    };
  }
  export namespace Middle {
    export const getList = (
      input: IREPropertyCategory.IMiddle.ISearch
    ): Promise<IPaginatedResponse<IREPropertyCategory.IMiddle>> => {
      throw Error();
    };
    export const getOne = (
      category_id: string
    ): Promise<IREPropertyCategory.IMiddle> => {
      throw Error();
    };
  }
  export namespace Sub {
    export const getList = (
      input: IREPropertyCategory.ISub.ISearch
    ): Promise<IPaginatedResponse<IREPropertyCategory.ISub>> => {
      throw Error();
    };
    export const getOne = (
      category_id: string
    ): Promise<IREPropertyCategory.ISub> => {
      throw Error();
    };
  }
}
