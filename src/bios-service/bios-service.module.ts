import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BiosServiceController } from './bios-service.controller';
import { BiosServiceService } from './bios-service.service';
import { BiosServiceSchema } from './schemas/bios-service.schema';
import { MailingService } from './services/mailing/mailing.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { createTransport } from 'nodemailer';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'BiosService', schema: BiosServiceSchema}
    ]),
    MailerModule.forRoot({
      /**login: https://ethereal.email/messages */
      transport: {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'mckayla.kuphal@ethereal.email',// generated ethereal user
          pass: 'vN5tbCmZMERtrwzMN1', // generated ethereal password
        }
      },
      // 'smtps://mckayla.kuphal@ethereal.email:vN5tbCmZMERtrwzMN1@smtp.ethereal.email',
      // defaults: {
      //   from:'"nest-modules" <mckayla.kuphal@ethereal.email>',
      // },
      // template: {
      //   dir: __dirname + '/templates',
      //   adapter: new PugAdapter(),
      //   options: {
      //     strict: true,
      //   },
      // },
    }),
  ],
  controllers: [BiosServiceController],
  providers: [BiosServiceService, MailingService]
})
export class BiosServiceModule {}
