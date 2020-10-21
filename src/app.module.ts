import { Module } from '@nestjs/common';
import { BiosServiceController } from './bios-service/bios-service.controller';
import { BiosServiceService } from './bios-service/bios-service.service';

@Module({
  imports: [],
  controllers: [ BiosServiceController],
  providers: [BiosServiceService],
})
export class AppModule {}
