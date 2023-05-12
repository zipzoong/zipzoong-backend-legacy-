import { IBusinessRatesStats } from "@DTO/business_rates_stats";

export namespace Service {
  export const create = (input: {
    data: IBusinessRatesStats.IRate.ICreate;
    user_id: string;
  }): Promise<void> => {
    // user exist ?
    // user verified ?
    // ratee exist and verified ?
    throw Error();
  };
}
