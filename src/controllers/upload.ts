import { IUpload } from "@DTO/upload";
import Upload from "@PROVIDER/upload";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("upload")
export class UploadController {
  /**
   * 리소스를 업로드하기 위한 presigned url을 얻기 위한 요청
   *
   * @return url and presigned url
   * @throws 500 Internal Server Error
   */
  @TypedRoute.Post()
  getImageUrls(@TypedBody() body: IUpload.IBody): Promise<IUpload> {
    return Upload.Service.getImageUrls(body.resource);
  }
}
