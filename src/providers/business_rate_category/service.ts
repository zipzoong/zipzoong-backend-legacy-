import { IBusinessRateCategory } from "@DTO/business_rate_category";

export namespace Service {
  export const getList = (
    input: IBusinessRateCategory.ISearch
  ): Promise<IBusinessRateCategory[]> => {
    throw Error();
  };
}
