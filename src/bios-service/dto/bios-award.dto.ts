import { IsNumber, IsString } from 'class-validator';
export class BiosAwardDTO {
  @IsString()
  readonly award: string;
  @IsNumber()
  readonly year: number;
  @IsString()
  readonly by: string;
}