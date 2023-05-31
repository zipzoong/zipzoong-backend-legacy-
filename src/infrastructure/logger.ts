import { LoggerService } from "@nestjs/common";
import winston from "winston";
import { Configuration } from "./config";

export namespace Logger {
  const logger: LoggerService = (() => {
    const console = new winston.transports.Stream({ stream: process.stdout });
    const extend = new winston.transports.Stream({ stream: process.stdout });
    const _logger = winston.createLogger({
      level: Configuration.NODE_ENV === "development" ? "silly" : "error",
      format: winston.format.simple(),
      transports: Configuration.NODE_ENV === "production" ? extend : console
    });
    return _logger;
  })();

  export const get = (): LoggerService => logger;
}
