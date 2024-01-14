import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    return this.appService.getHello();
  }
  @Get("setup")
  async setup(): Promise<any> {
    return this.appService.setup();
  }
}
