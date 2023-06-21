import { IUpload } from "@DTO/upload";
import Upload from "@PROVIDER/upload";
import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("upload/public-images")
export class PublicUploadController {
  /**
   * 공개 리소스를 업로드하기 위한 presigned url을 얻기 위한 요청
   *
   * @param resource_type public resource type
   * @return url and presigned url
   * @throws 500 Internal Server Error
   */
  @TypedRoute.Get(":resource_type")
  getUrls(
    @TypedParam("resource_type") resource_type: IUpload.PublicImageType
  ): Promise<IUpload> {
    return Upload.Service.getPublicImageUrls(resource_type);
  }
}

@Controller("upload/private-images")
export class PrivateUploadController {
  /**
   * 비공개 리소스를 업로드하기 위한 presigned url을 얻기 위한 요청
   *
   * @param resource_type private resource type
   * @return url and presigned url
   * @throws 500 Internal Server Error
   */
  @TypedRoute.Get(":resource_type")
  getUrls(
    @TypedParam("resource_type") resource_type: IUpload.PrivateImageType
  ): Promise<IUpload> {
    return Upload.Service.getPrivateImageUrls(resource_type);
  }
}
