import { Result } from "@UTIL";
import { IUpload } from "@DTO/upload";
import { AwsS3 } from "@EXTERNAL/storage";
import { Exception } from "./exception";

export namespace Service {
  export const getPublicImageUrls = async (
    resource: IUpload.PublicImageType
  ): Promise<IUpload> => {
    const urls = await AwsS3.Upload.publicImage({
      "content-type": "image",
      "resource-type": resource
    });

    if (Result.Error.is(urls)) throw Exception.RequestFail;

    return Result.Ok.flatten(urls);
  };

  export const getPrivateImageUrls = async (
    resource: IUpload.PrivateImageType
  ): Promise<IUpload> => {
    const urls = await AwsS3.Upload.privateImage({
      "content-type": "image",
      "resource-type": resource
    });

    if (Result.Error.is(urls)) throw Exception.RequestFail;

    return Result.Ok.flatten(urls);
  };
}
