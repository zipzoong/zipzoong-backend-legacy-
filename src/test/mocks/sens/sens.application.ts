import { Configuration } from "@INFRA/config";
import { DynamicModule } from "@nestia/core";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import helmet from "helmet";

export const sens = async () => {
  const app = await NestFactory.create(
    await DynamicModule.mount(`${__dirname}/controllers`),
    { logger: false }
  );
  const PORT = Configuration.NAVER_SENS_HOST.split(":")[2];
  await app
    .use(cookieParser())
    .use(helmet({ contentSecurityPolicy: true, hidePoweredBy: true }))
    .listen(PORT ?? 60000);
  return app;
};
