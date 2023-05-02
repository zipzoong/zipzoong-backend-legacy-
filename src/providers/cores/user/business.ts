import { IBusinessUser } from "@DTO/user";

export namespace BusinessUser {
  export const isVerified = (user: IBusinessUser): boolean => user.is_verified;
  export const isUnVerified = (user: IBusinessUser): boolean =>
    !user.is_verified;
}
