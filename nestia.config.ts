import type nestia from "@nestia/sdk";

const NESTIA_CONFIG: nestia.INestiaConfig = {
  input: {
    include: ["src/controllers"],
    exclude: ["src/**/*.internal.ts"]
  },
  output: "src/api",
  e2e: "test",
  json: true,
  primitive: false,
  swagger: {
    output: "packages/api/swagger.json",
    security: {
      bearer: {
        type: "apiKey",
        name: "Authorization",
        in: "header"
      }
    }
  }
};

export default NESTIA_CONFIG;
