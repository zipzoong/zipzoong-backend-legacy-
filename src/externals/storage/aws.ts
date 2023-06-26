import { Result } from "@UTIL";
import { IResult } from "@TYPE";
import { Configuration } from "@INFRA/config";
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";
import { isNull, isUndefined } from "@fxts/core";
import { Logger } from "@INFRA/logger";
import { IUpload } from "@DTO/upload";

export namespace AwsS3 {
  const client = new S3Client({ region: Configuration.AWS_REGION });
  type BucketType = keyof Pick<
    typeof Configuration,
    "AWS_S3_PUBLIC" | "AWS_S3_PRIVATE"
  >;

  export namespace Upload {
    const duration = 180; // 3 min
    interface IUploadInput<T extends IUpload.ContentType, U> {
      "content-type": T;
      "resource-type": U;
    }

    const createPutCommand =
      (bucket: BucketType) =>
      <T extends IUpload.ContentType, U>(
        input: IUploadInput<T, U>
      ): PutObjectCommand => {
        const now = new Date();
        const year = now.getUTCFullYear();
        const month = `${now.getUTCMonth() + 1}`.padStart(2, "0");
        const date = `${now.getUTCDate()}`.padStart(2, "0");
        const key = `${input["content-type"]}s/${
          input["resource-type"]
        }/${year}${month}${date}_${randomUUID()}`;
        return new PutObjectCommand({
          Bucket: Configuration[bucket],
          Key: key,
          ContentType: `${input["content-type"]}/*`,
          Metadata: {
            "x-amz-meta-size": "original"
          }
        });
      };

    const upload =
      (bucket: BucketType) =>
      async <T extends IUpload.ContentType, U>(
        input: IUploadInput<T, U>
      ): Promise<IResult<IUpload, null>> => {
        try {
          const cmd = createPutCommand(bucket)(input);
          const presigned_url = await getSignedUrl(client, cmd, {
            expiresIn: duration
          });
          const url = new URL(presigned_url);
          url.search = "";
          return Result.Ok.map({
            url: url.href,
            presigned_url
          });
        } catch (err: any) {
          Logger.get().error(
            err?.stack ?? "Error: Fail to Create AWS S3 Put Pregsigned Url"
          );
          return Result.Error.map(null);
        }
      };

    export const publicImage = upload("AWS_S3_PUBLIC")<
      "image",
      IUpload.PublicImageType
    >;

    export const privateImage = upload("AWS_S3_PRIVATE")<
      "image",
      IUpload.PrivateImageType
    >;
  }

  export namespace Read {
    const duration = 300; // 5min

    const createGetCommand = (url: string): IResult<GetObjectCommand, null> => {
      const regex = new RegExp(
        `^https:\\/\\/${Configuration.AWS_S3_PRIVATE}\\.s3\\.${Configuration.AWS_REGION}\\.amazonaws\\.com\\/([^?]+)(?:\\?|$)`
      );

      const match = url.match(regex);
      if (isNull(match)) return Result.Error.map(null);
      const key = match[1];
      if (isUndefined(key)) return Result.Error.map(null);

      return Result.Ok.map(
        new GetObjectCommand({ Bucket: Configuration.AWS_S3_PRIVATE, Key: key })
      );
    };

    export const getUrl = async (
      url: string
    ): Promise<IResult<string, null>> => {
      try {
        const command = createGetCommand(url);
        if (Result.Error.is(command)) return command;

        return Result.Ok.map(
          await getSignedUrl(client, Result.Ok.flatten(command), {
            expiresIn: duration
          })
        );
      } catch (err: any) {
        Logger.get().error(
          err?.stack ?? "Error: Fail to Create AWS S3 Get Pregsigned Url"
        );
        return Result.Error.map(null);
      }
    };
  }
}
