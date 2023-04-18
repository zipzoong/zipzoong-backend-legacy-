import { HttpError } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import assert from "assert";

export const test_error =
  <T>(api: (data: T) => Promise<unknown>) =>
  (statusCode: HttpStatus, message: string) =>
  async (data: T) => {
    try {
      await api(data);
      throw Error("Unexpected Success!");
    } catch (error) {
      if (!(error instanceof HttpError)) {
        throw error;
      }
      assert.strictEqual(error.status, statusCode);
      assert.strictEqual(error.message, message);
    }
  };
