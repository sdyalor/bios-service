import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { BiosServiceDTO } from './dto/bios-service.dto';
import { Response } from 'express';

@Controller('bios-service')
export class BiosServiceController {

  @Post()
  create(@Res() res, @Body() biosServiceDTO: BiosServiceDTO) {
    console.log(biosServiceDTO);
    return res.status(HttpStatus.OK).json({
      message: 'receivedasdf'
    });
    // return {message: 'ok'}
  }
  @Get()
  list() {

  }
  @Get(':id')
  getById() {

  }
  @Put(':id')
  update() {

  }
  @Delete(':id')
  delete() {

  }
  @Post(':id/award')
  createAward() {

  }
}
