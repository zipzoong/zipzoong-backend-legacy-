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
        ...(process.env as unknown as IEnv)
      };
};
export const Configuration: IEnv = init();

interface IEnv {
  readonly NODE_ENV: "development" | "production" | "test";
  readonly PORT: string | number;

  readonly ACCESS_TOKEN_PUBLIC_KEY: string;
  readonly ACCESS_TOKEN_PRIVATE_KEY: string;

  readonly KAKAO_CLIENT_ID: string;
  readonly KAKAO_CLIENT_SECRET: string;
  readonly KAKAO_REDIRECT_URI: string;
}
