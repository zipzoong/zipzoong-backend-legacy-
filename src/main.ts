import { Backend } from "./application";

Backend.start({
  logger: false,
  cors: { credentials: true, origin: "https://www.zipzoong.co.kr" }
});
