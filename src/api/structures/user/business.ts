import { IUser } from "./user";

export interface IBusinessUser<
  T extends IBusinessUser.Type = IBusinessUser.Type
> extends IUser<"business"> {
  /**
   * 비즈니스 유형
   * - real estate
   * - home service
   */
  readonly business_type: T;
  /**
   * 프로필 이미지 주소
   */
  readonly profile_image_url: string;
  /**
   * 소개 제목
   */
  readonly introduction_title: string;
  /**
   * 소개 본문
   */
  readonly introduction_content: string;
}

export namespace IBusinessUser {
  export type Type = "real estate" | "home service";
}
