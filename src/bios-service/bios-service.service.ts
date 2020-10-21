import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AwardModel, IBiosService } from './interfaces/bios-service.interface';
import { Model } from 'mongoose';
import { BiosServiceDTO } from './dto/bios-service.dto';
import { BiosAwardDTO } from './dto/bios-award.dto';

@Injectable()
export class BiosServiceService {

  constructor(@InjectModel('BiosService') private readonly biosServiceModel: Model<IBiosService>)  {}

  async create(biosServiceDTO: BiosServiceDTO): Promise<IBiosService> {
    let bio: IBiosService
    try {
     bio =  new this.biosServiceModel(biosServiceDTO);
      console.log(bio,'bio IS HERE')
    } catch(err) {
      console.log('ERRROR IS HERE')
    }
  //  console.log(` created bio from servModel is ${bio}`);
   await bio.save()
   return bio;
  }
  async list(): Promise<IBiosService[]> {
    const bios = await this.biosServiceModel.find().exec();
    return bios;
  }
  async getById(bioId: string): Promise<IBiosService> {
    const bio = await this.biosServiceModel.findById(bioId).exec(); /**this can trown an error */
    return bio;
  }
  async update(bioId: string, biosServiceDTO: BiosServiceDTO): Promise<IBiosService> {
    delete biosServiceDTO.awards
    const updated = await this.biosServiceModel.findByIdAndUpdate(bioId,biosServiceDTO,{new: true});
    return updated;
  }
  async delete(bioId: string): Promise<IBiosService> {
    const deleted =  await this.biosServiceModel.findByIdAndDelete(bioId);
    return deleted;
  }
  async createAward(bioId:string, bioAwardDTO: BiosAwardDTO): Promise<AwardModel[]> {
    const bio = await this.biosServiceModel.findById(bioId).exec();
    bio.awards.push(bioAwardDTO)
    const latestbio = await bio.save()
    return latestbio.awards;
  }
}
