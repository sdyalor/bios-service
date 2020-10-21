import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { BiosServiceController } from './bios-service/bios-service.controller';
import { BiosServiceService } from './bios-service/bios-service.service';
import { BiosServiceModule } from './bios-service/bios-service.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sdyalor:nBJLFbqignmJqWxQ@cluster0.7yg8y.gcp.mongodb.net/bios-service-1?retryWrites=true&w=majority'), BiosServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
