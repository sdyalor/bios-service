import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailingService {
  constructor(private readonly mailerService: MailerService) {}
  public send(awardBy:string,awardName:string): Promise<any> {
    return this
      .mailerService
      .sendMail({
        to: 'mckayla.kuphal@ethereal.email', // list of receivers
        from: 'mckayla.kuphal@ethereal.email', // sender address
        subject: `Ha Ganado el premio ${awardBy}  entregado por ${awardName}  ✔`, // Subject line
        text: 'Estimado ha ganado un premio, felicidades 😎🤙', // plaintext body
        html: '<b>Estimado ha ganado un premio, felicidades 😎🤙</b>', // HTML body content
      });
  }
}
