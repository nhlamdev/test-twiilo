import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private twilio = require('twilio');
  private accountSid = key;
  private authToken = token;
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
