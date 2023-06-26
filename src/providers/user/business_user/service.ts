import { Result } from "@UTIL";
import { EStorage } from "@EXTERNAL/storage";

export namespace Service {
  export const signUrl = async <T extends { url: string }>(
    input: T
  ): Promise<T> => {
    const presigned_url = await EStorage.Read.getUrl(input.url);
    input.url = Result.Ok.is(presigned_url)
      ? Result.Ok.flatten(presigned_url)
      : input.url;

    return input;
  };
}
