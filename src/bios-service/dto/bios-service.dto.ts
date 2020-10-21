import { Type } from 'class-transformer/decorators';
import { IsArray, IsDateString, IsMongoId, IsNumber, IsObject, IsString, MinLength, ValidateNested } from 'class-validator';

export class NameDTO {
  @IsString()
  first: string;
  @IsString()
  last: string;
}

export class BiosServiceDTO {
  // @IsMongoId()
  @IsNumber()
  _id?: number;
  @IsObject() @ValidateNested() @Type(() => NameDTO)
  name: NameDTO;
  @IsDateString()
  birth: Date;
  @IsDateString()
  death: Date;
  @MinLength(2,{ each: true })
  contribs: string[];
  @IsArray()
  @ValidateNested() @Type(()=> BioAwardsDTO)
  awards: BioAwardsDTO[]
}
class BioAwardsDTO {
  @IsString()
  readonly award: string;
  @IsNumber()
  readonly year: number;
  @IsString()
  readonly by: string;
}