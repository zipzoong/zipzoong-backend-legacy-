import { Backend } from "./application";

Backend.start({
  logger: false,
  cors: { credentials: true, origin: /\.zipzoong\.co.kr$/ }
});
