import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//localhost:3000
export class AppController {
  constructor(private readonly appService: AppService) {}

//router.get('/hello')
//localhost:3000/hello
  @Get()
  root(): any {
    return this.appService.root();
  }
}
