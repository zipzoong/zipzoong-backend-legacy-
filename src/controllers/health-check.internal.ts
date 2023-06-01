import { Controller, Get } from "@nestjs/common";

@Controller("health-check")
export class HealthCheckController {
  @Get()
  check() {
    return "health check";
  }

  @Get("log")
  log() {
    throw Error("로그 테스트");
  }
}
