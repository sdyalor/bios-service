import { Type } from 'class-transformer/decorators';
import { IsArray, IsDateString, IsMongoId, IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from 'class-validator';
import { BiosAwardDTO } from './bios-award.dto';

export class NameDTO {
  @IsString()
  first: string;
  @IsString()
  last: string;
}

export class BiosServiceDTO {
  @IsOptional()
  @IsMongoId()
  // @IsNumber()
  _id?: string;
  @IsObject() @ValidateNested() @Type(() => NameDTO)
  name: NameDTO;
  @IsDateString()
  birth: Date;
  @IsDateString()
  death: Date;
  @MinLength(2,{ each: true })
  contribs: string[];
  @IsOptional()
  @IsArray()
  @ValidateNested() @Type(()=> BiosAwardDTO)
  awards: BiosAwardDTO[]
}
