import { Controller, Get, Header, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHello():any {
    return this.appService.getHello();
  }

  @Post()
  async testSource(
      @Body('host_name') sourceHostName : String,
      @Body('port') sourcePort : Number,
      @Body('db_name') sourceDbName : String){
      await this.appService.testSource( sourceHostName, sourcePort, sourceDbName );
      return "Server Connected";
  }
}
