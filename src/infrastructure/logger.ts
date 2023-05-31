import { LoggerService } from "@nestjs/common";
import winston from "winston";
import { Configuration } from "./config";
import {
  CloudWatchLogsClient,
  PutLogEventsCommand
} from "@aws-sdk/client-cloudwatch-logs";
import { Writable } from "stream";

export namespace Logger {
  const createAwsStream = () => {
    const client = new CloudWatchLogsClient({
      region: "ap-northeast-2",
      credentials: {
        accessKeyId: Configuration.AWS_LOGGER_ACCESS_KEY,
        secretAccessKey: Configuration.AWS_LOGGER_SECRET_KEY
      }
    });
    const stream = new Writable({
      write(chunk, encoding, callback) {
        const log = chunk.toString();
        const command = new PutLogEventsCommand({
          logGroupName: "/main_server",
          logStreamName: "application",
          logEvents: [{ message: log, timestamp: Date.now() }]
        });
        client
          .send(command)
          .then(() => {
            callback();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });

    return new winston.transports.Stream({ stream });
  };
  const logger: LoggerService = (() => {
    const console = new winston.transports.Stream({ stream: process.stdout });
    const _logger = winston.createLogger({
      level: Configuration.NODE_ENV === "development" ? "silly" : "error",
      format: winston.format.simple(),
      transports:
        Configuration.NODE_ENV === "production" ? createAwsStream() : console
    });
    return _logger;
  })();

  export const get = (): LoggerService => logger;
}
