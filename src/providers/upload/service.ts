import { Result } from "@UTIL";
import { IUpload } from "@DTO/upload";
import { Exception } from "./exception";
import { EStorage } from "@EXTERNAL/storage";

export namespace Service {
  export const getPublicImageUrls = async (
    resource: IUpload.PublicImageType
  ): Promise<IUpload> => {
    const urls = await EStorage.Upload.publicImage({
      "content-type": "image",
      "resource-type": resource
    });

    if (Result.Error.is(urls)) throw Exception.RequestFail;

    return Result.Ok.flatten(urls);
  };

  export const getPrivateImageUrls = async (
    resource: IUpload.PrivateImageType
  ): Promise<IUpload> => {
    const urls = await EStorage.Upload.privateImage({
      "content-type": "image",
      "resource-type": resource
    });

    if (Result.Error.is(urls)) throw Exception.RequestFail;

    return Result.Ok.flatten(urls);
  };
}
