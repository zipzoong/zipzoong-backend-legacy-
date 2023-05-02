import { ICustomer } from "@DTO/user";

export namespace CustomerService {
  export const getMe = async (
    user_id: string
  ): Promise<ICustomer.IPrivateResponse> => {
    throw Error();
  };
}
