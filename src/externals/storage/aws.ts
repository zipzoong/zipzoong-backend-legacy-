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

  namespace Upload {
    const duration = 180; // 3 min

    const mapper: Record<
      IUpload.IResourceType,
      { readonly path: string; readonly content: "image" }
    > = {
      profiles: { path: "public/images", content: "image" },
      portfolios: { path: "public/images", content: "image" },
      certifications: { path: "private/images", content: "image" }
    };

    const createPutCommand = (
      resource: IUpload.IResourceType
    ): PutObjectCommand => {
      const meta = mapper[resource];
      const now = new Date();
      const year = now.getUTCFullYear();
      const month = `${now.getUTCMonth() + 1}`.padStart(2, "0");
      const date = `${now.getUTCDate()}`.padStart(2, "0");

      const key = `${meta.path}/${year}${month}${date}_${randomUUID()}`;
      return new PutObjectCommand({
        Bucket: Configuration.AWS_S3,
        Key: key,
        ContentType: `${meta.content}/*`,
        Metadata: {
          "x-amz-meta-size": "original"
        }
      });
    };

    export const upload = async (
      resource: IUpload.IResourceType
    ): Promise<IResult<IUpload, null>> => {
      try {
        const cmd = createPutCommand(resource);
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
  }

  namespace Read {
    const duration = 300; // 5min

    const createGetCommand = (url: string): IResult<GetObjectCommand, null> => {
      const regex = new RegExp(
        `^https:\\/\\/${Configuration.AWS_S3}\\.s3\\.${Configuration.AWS_REGION}\\.amazonaws\\.com\\/private\\/([^?]+)(?:\\?|$)`
      );

      const match = url.match(regex);
      if (isNull(match)) return Result.Error.map(null);
      const key = match[1];
      if (isUndefined(key)) return Result.Error.map(null);

      return Result.Ok.map(
        new GetObjectCommand({ Bucket: Configuration.AWS_S3, Key: key })
      );
    };

    export const read = async (url: string): Promise<IResult<string, null>> => {
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

  export const upload = Upload.upload;
  export const read = Read.read;
}
