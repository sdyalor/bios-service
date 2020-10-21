import { BadRequestException, Body, Catch, ConflictException, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UseFilters, UsePipes, ValidationError, ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
import { BiosServiceDTO } from './dto/bios-service.dto';
import { Response } from 'express';
import { BiosServiceService } from './bios-service.service';
import { ValidationErrorFilter } from './filters/mongo-exception.filter';
import { Types } from 'mongoose';
import { DTOValidationPipe } from './dto-validation.pipe';
import { BiosAwardDTO } from './dto/bios-award.dto';
import { MailingService } from './services/mailing/mailing.service';



@Controller('bios-service')
export class BiosServiceController {

  constructor(private biosServiceService:BiosServiceService,private mailingService:MailingService){}
  @Post()
  @UsePipes(new DTOValidationPipe())
  @UseFilters(ValidationErrorFilter)
  async create(@Res() res:Response, @Body() biosServiceDTO: BiosServiceDTO) {
    // console.log(biosServiceDTO);
    const bio = await this.biosServiceService.create(biosServiceDTO);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      bio
    });
    // return {message: 'ok'}
  }
  @Get()
  async list(@Res() res:Response) {
    const bios = await this.biosServiceService.list();
    return res.status(HttpStatus.OK).json({
      bios
    })
  }
  @Get(':id')
  // @UseFilters(MongoExceptionFilter)
  async getById(@Res() res: Response, @Param('id') bioId:string) {
    if(Types.ObjectId.isValid(bioId)){
      const bio = await this.biosServiceService.getById(bioId);
      if (!bio) {
        throw new NotFoundException('Bio with that id does not exist');
      }
      return res.status(HttpStatus.OK).json({
        bio
      })
    } else {
        throw new NotFoundException('Invalid ID');
    }

  }

  @Put(':id')
  @UsePipes(new DTOValidationPipe())
  @UseFilters(ValidationErrorFilter)
  async update(@Res() res:Response, @Body() biosServiceDTO :BiosServiceDTO, @Param('id') bioId:string) {
    if(Types.ObjectId.isValid(bioId) && !biosServiceDTO._id){
      const latestBio = await this.biosServiceService.update(bioId,biosServiceDTO);
      if (!latestBio) {
        throw new NotFoundException('Bio with that id does not exist');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Bio Updated Succesfully',
        latestBio
      })
    } else if (biosServiceDTO._id) {
        throw new ConflictException('The object to update must not have an _id');
    } else {
        throw new NotFoundException('Invalid ID');
    }

  }
  @Delete(':id')
  async delete(@Res() res: Response, @Param('id') bioId:string) {
    if(Types.ObjectId.isValid(bioId)){
      const bioDeleted = await this.biosServiceService.delete(bioId);
      if (!bioDeleted) throw new NotFoundException('Bio does not exists');
      return res.status(HttpStatus.OK).json({
        message: "Bio deleted succesfuly",
        bioDeleted
      })
      
    } else {
        throw new NotFoundException('Invalid ID');
    }
  }
  @Post(':id/award')
  async createAward(@Res() res:Response,@Param('id') bioId:string,@Body() biosAwardDTO:BiosAwardDTO ) {
    const  latestawards = await this.biosServiceService.createAward(bioId,biosAwardDTO);
    const awardName = biosAwardDTO.award;
    const awardBy = biosAwardDTO.by;
    try{
     this.mailingService.send(awardBy,awardName);

    } catch (err) {
      console.log(err,"MAIL ERRORS")
    }
    return res.status(HttpStatus.OK).json({
      award:'award received, the company is going to receive a mail for you',
      id: bioId,
      awardsCount: latestawards.length,
      latestawards
    });
  }
}
