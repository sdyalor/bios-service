// import { ArgumentsHost, Catch, ConflictException, ExceptionFilter } from '@nestjs/common';
// import { MongoError } from 'mongodb';


// @Catch(MongoError)
// export class MongoExceptionFilter implements ExceptionFilter {
//   catch(exception: MongoError, host: ArgumentsHost) {
//    console.log(exception,'ALERT ERROR CATCHED');
//     switch (exception.code) {
//       case 11000:
//       default: console.log(exception,'ALERT ERROR CATCHED');
//         // duplicate exception
//         // do whatever you want here, for instance send error to client
//     }
//   }
// }

// import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from "@nestjs/common";
// import { MongoError } from 'mongodb';
// import { Response } from 'express';

// @Catch(MongoError)
// export class MongoExceptionFilter implements ExceptionFilter {

//   catch(exception: MongoError, host: ArgumentsHost) {
//    console.log('ALERT ERROR CATCHED');
//    console.log('ALERT ERROR CATCHED');
//       switch (exception.code) {
//           case 11000:
//               const ctx = host.switchToHttp();
//               const response = ctx.getResponse<Response>();
//               response.statusCode = HttpStatus.FORBIDDEN;
//               response
//                   .json({
//                       statusCode: HttpStatus.FORBIDDEN,
//                       timestamp: new Date().toISOString(),
//                       message: 'You are already registered'
//                   });
//       }
//   }
// }

import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common';
import { Error } from 'mongoose';
import { IBioDTOError } from '../errors/bad-request-exception.error';
import ValidationError = Error.ValidationError;

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {

  catch(exception: ValidationError, host: ArgumentsHost): any {

    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json(<IBioDTOError>{
      statusCode: 400,
      createdBy: 'ValidationErrorFilter, Schema or Model definition',
      errors: exception.errors,
    });
  }
}


