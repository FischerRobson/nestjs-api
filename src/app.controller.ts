import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  
  @Get()
  getRootRoute() {
    return 'root';
  }

  @Get('/bye')
  getByeThere() {
    return 'bye there';
  }
}