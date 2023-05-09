import { IPaginatedResponse } from "@DTO/common";
import { IREProperty } from "@DTO/real_estate/re_property";

export namespace REProperty {
  export const getList = (
    input: IREProperty.ISearch
  ): Promise<IPaginatedResponse<IREProperty>> => {
    throw Error;
  };
  export const createMany = (input: {
    data: IREProperty.ICreateManyRequest["data"];
    user_id: string;
  }): Promise<void> => {
    throw Error();
  };
}
