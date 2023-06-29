import { Result } from "@UTIL";
import { IUpload } from "@DTO/upload";
import { Exception } from "./exception";
import { EStorage } from "@EXTERNAL/storage";

export namespace Service {
  export const getImageUrls = async (
    resource: IUpload.PublicImageType | IUpload.PrivateImageType
  ) => {
    const urls = await EStorage.upload(resource);

    if (Result.Error.is(urls)) throw Exception.RequestFail;

    return Result.Ok.flatten(urls);
  };
}
