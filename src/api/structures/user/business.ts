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
   * 자기 소개
   */
  readonly introduction: IBusinessUser.IIntroduction;
}

export namespace IBusinessUser {
  export type Type = "real estate" | "home service";

  /**
   * 자기 소개 정보
   */
  export interface IIntroduction {
    /**
     * 제목
     */
    readonly title: string;
    /**
     * 본문
     */
    readonly content: string;
  }
}
