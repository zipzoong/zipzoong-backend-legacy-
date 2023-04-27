import { IPaginatedResponse } from "@DTO/common";
import { IHSProvider } from "@DTO/user";

export namespace HSProvider {
  export const create = (input: IHSProvider.ICreate): IHSProvider => {
    throw Error();
  };
}

export namespace HSProviderService {
  export const create = (
    input: IHSProvider.ICreateRequest
  ): Promise<IPaginatedResponse<IHSProvider.IResponse>> => {
    throw Error();
  };
}
