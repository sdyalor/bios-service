import { BadRequestException, HttpStatus, ValidationError, ValidationPipe, ValidationPipeOptions } from "@nestjs/common";
import { IBioDTOError } from "./errors/bad-request-exception.error";
/**
 * alternative to
 */
  // @UsePipes(new ValidationPipe({
  //   exceptionFactory: (errors: ValidationError[]) => 
  //   new BadRequestException({
  //     statusCode: 400,
  //     createdBy: 'ValidationPipe',
  //     errors: `${errors}`
  //   }),
  //   errorHttpStatusCode: HttpStatus.BAD_REQUEST
  // }))
export class DTOValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions){
    super();
    // if(options){
    //   options.exceptionFactory = (errors: ValidationError[]) => 
    //   new BadRequestException({
    //     statusCode: 400,
    //     createdBy: 'ValidationPipe',
    //     errors: `${errors}`
    //   });
    //   options.errorHttpStatusCode = HttpStatus.BAD_REQUEST
    // }
      this.exceptionFactory = (errors: ValidationError[]) => 
      new BadRequestException( <IBioDTOError>{
        statusCode: 400,
        createdBy:'ValidationPipeDTO',
        errors: `${errors}`
      });
      this.errorHttpStatusCode = HttpStatus.BAD_REQUEST
  }
}