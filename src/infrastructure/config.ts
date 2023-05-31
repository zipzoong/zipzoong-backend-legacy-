import dotenv from "dotenv";
import typia from "typia";

const init = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      dotenv.config({ path: ".env" });
      break;
    case "test":
      dotenv.config({ path: ".env.test" });
      break;
    case "production":
    default:
      // not use .env file
      break;
  }

  return process.env.NODE_ENV === "test"
    ? ({ ...process.env } as unknown as IEnv)
    : {
        ...typia.assert<IEnv>(process.env)
      };
};
export const Configuration: IEnv = init();

interface IEnv {
  readonly NODE_ENV: "development" | "production" | "test";
  readonly PORT: string | number;
  readonly DATABASE_URL: string;

  readonly ACCOUNT_TOKEN_KEY: string;
  readonly ACCESS_TOKEN_KEY: string;
  readonly REFRESH_TOKEN_KEY: string;

  readonly KAKAO_CLIENT_ID: string;
  readonly KAKAO_CLIENT_SECRET: string;
  readonly KAKAO_REDIRECT_URI: string;

  readonly NAVER_SENS_SERVICE_ID: string;
  readonly NAVER_SENS_ACCESS_KEY: string;
  readonly NAVER_SENS_SECRET_KEY: string;
  readonly NAVER_SENS_CALLER: string;
  readonly NAVER_SENS_HOST: string;

  readonly AWS_LOGGER_ACCESS_KEY: string;
  readonly AWS_LOGGER_SECRET_KEY: string;
}
