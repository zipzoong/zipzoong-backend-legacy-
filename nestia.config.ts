import type nestia from "@nestia/sdk";

const NESTIA_CONFIG: nestia.INestiaConfig = {
  input: {
    include: ["src/controllers"],
    exclude: ["src/**/*.internal.ts"]
  },
  output: "src/api",
  json: true,
  primitive: false,
  simulate: true,
  swagger: {
    output: "packages/swagger-ui/swagger.json",
    info: {
      version: "0.0.1",
      title: "Zipzoong RESTAPI",
      description: "Zipzoong Server API document"
    },
    servers: [
      { url: "https://api.zipzoong.co.kr", description: "Zipzoong API Server" }
    ],
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
