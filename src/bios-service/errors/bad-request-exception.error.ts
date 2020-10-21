export interface IBioDTOError {
  statusCode: number;
  createdBy: string;
  errors: string | object
}
// export class BadRequestExceptionError {
//   constructor(
//     private readonly statusCode:number,
//     private readonly createdBy: string,
//     private readonly errors: string
//   ){}
// }