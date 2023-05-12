import { IBusinessRatesStats } from "@DTO/business_rates_stats";
import { IPaginatedResponse } from "@DTO/common";

export namespace Stats {
  export const getList = (
    input: IBusinessRatesStats.ISearch
  ): Promise<IPaginatedResponse<IBusinessRatesStats>> => {
    throw Error();
  };
}
