import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World! from Sai Krishna Emmadishetty app!";
  }

  getAbout(): string {
    return "About Sai Krishna.";
  }
}
