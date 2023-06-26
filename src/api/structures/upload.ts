export interface IUpload {
  /**
   * 해당 리소스를 조회할 때 사용
   *
   * 서비스에 리소스를 등록할 때, 해당 값을 사용한다.
   */
  readonly url: string;
  /**
   * 리소스를 업로드하기 위해 부여된 url
   *
   * 업로드된 리소스는 `url`을 통해 접근할 수 있다.
   */
  readonly presigned_url: string;
}

export namespace IUpload {
  export type ContentType = "image";
  export type PublicImageType =
    | "user-profiles"
    | "re-property-mains"
    | "hs-examples";

  export type PrivateImageType = "business-certifications";

  export interface IPublicImageInput {
    content: "public-image";
    resource: PublicImageType;
  }
  export interface IPrivateImageInput {
    content: "private-image";
    resource: PrivateImageType;
  }
  export type IInput = IPublicImageInput | IPrivateImageInput;
}
