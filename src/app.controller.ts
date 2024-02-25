import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private twilio = require('twilio');
  private accountSid = 'ACff99dfe9ae15bfbdb666967c12883e3d';
  private authToken = 'e86c6ae16c5636c97f4b9f302a55a585';
  private client: any;
  constructor(private readonly appService: AppService) {
    this.client = this.twilio(this.accountSid, this.authToken);
  }

  @Get()
  getHello(): string {
    this.client.messages
      .create({
        body: 'Hello from twilio-node',
        to: '+84-phone-to', // Text this number
        from: '+13-phone-send', // From a valid Twilio number
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.error(error));
    return this.appService.getHello();
  }
}
