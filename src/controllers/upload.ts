import { IUpload } from "@DTO/upload";
import Upload from "@PROVIDER/upload";
import { TypedBody, TypedRoute } from "@nestia/core";
import { BadRequestException, Controller } from "@nestjs/common";

@Controller("upload")
export class UploadController {
  /**
   * 리소스를 업로드하기 위한 presigned url을 얻기 위한 요청
   *
   * @param resource_type resource type
   * @return url and presigned url
   * @throws 500 Internal Server Error
   */
  @TypedRoute.Post()
  getUrls(@TypedBody() body: IUpload.IInput): Promise<IUpload> {
    if (body.content === "public-image") {
      return Upload.Service.getPublicImageUrls(body.resource);
    } else if (body.content === "private-image") {
      return Upload.Service.getPrivateImageUrls(body.resource);
    } else {
      throw new BadRequestException(
        "Request body data is not following the promised type."
      );
    }
  }
}
