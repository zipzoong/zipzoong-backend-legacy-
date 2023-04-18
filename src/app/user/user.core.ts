import { IUser } from "@DTO/user";
import { getISOString } from "@UTIL";
import { randomUUID } from "crypto";

export namespace User {
  export const create = <T extends IUser.Type>(
    input: IUser.ICreate<T>
  ): IUser<T> => {
    const { user_type, name, phone, email } = input;
    return {
      user_type,
      id: randomUUID(),
      name,
      email,
      phone,
      created_at: getISOString()
    };
  };
}
