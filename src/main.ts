import { Logger } from "@INFRA/logger";
import { Backend } from "./application";

Backend.start({
  logger: false,
  cors: { credentials: true, origin: "https://www.zipzoong.co.kr" }
}).catch((err: Error) => {
  Logger.get().error(err.stack);
  process.exit(1);
});
