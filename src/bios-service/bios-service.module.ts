import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BiosServiceController } from './bios-service.controller';
import { BiosServiceService } from './bios-service.service';
import { BiosServiceSchema } from './schemas/bios-service.schema';
import { MailingService } from './services/mailing/mailing.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'BiosService', schema: BiosServiceSchema}
    ]),
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      defaults: {
        from:'"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [BiosServiceController],
  providers: [BiosServiceService, MailingService]
})
export class BiosServiceModule {}
