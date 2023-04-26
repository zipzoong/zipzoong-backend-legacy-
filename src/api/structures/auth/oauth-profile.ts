import { IUser } from "../user";

export interface IOauthProfile {
  readonly name: string | null;
  readonly email: string | null;
  readonly phone: string | null;
  readonly profile_image_url: string | null;
  /**
   * YYYY-MM-DD
   * @format date
   */
  readonly birth: string | null;
  readonly gender: IUser.GenderType | null;
  readonly address: IUser.IAddress | null;
}
