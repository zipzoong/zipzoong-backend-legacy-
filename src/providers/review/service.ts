import { IPaginatedResponse } from "@DTO/common";
import { IReview } from "@DTO/review";

export namespace Service {
  export const getList = async (
    input: IReview.ISearch
  ): Promise<IPaginatedResponse<IReview>> => {
    throw Error();
  };
  export const create = async (input: IReview.ICreate) => {};
}
