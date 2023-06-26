import { IResult } from "@TYPE";
import { Result } from "@UTIL";
import { IUpload } from "@DTO/upload";
import { Exception } from "./exception";
import { EStorage } from "@EXTERNAL/storage";

export namespace Service {
  const _getImageUrls = async <
    R extends IUpload.PublicImageType | IUpload.PrivateImageType
  >(
    upload: (input: {
      "content-type": "image";
      "resource-type": R;
    }) => Promise<IResult<IUpload, null>>,
    resource: R
  ) => {
    const urls = await upload({
      "content-type": "image",
      "resource-type": resource
    });

    if (Result.Error.is(urls)) throw Exception.RequestFail;

    return Result.Ok.flatten(urls);
  };

  export const getImageUrls = ({ content, resource }: IUpload.IInput) =>
    content === "public-image"
      ? _getImageUrls(EStorage.Upload.publicImage, resource)
      : _getImageUrls(EStorage.Upload.privateImage, resource);
}
