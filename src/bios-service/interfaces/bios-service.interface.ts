import { Document } from 'mongoose';
// import { Prop, Schema, SchemaFactory, AsyncModelFactory } from '@nestjs/mongoose';
export interface AwardModel {
  award : string,
  year : number,
  by : string,
}
/****/
export interface IBiosService extends Document {
  _id: string,
  name : {
      first : string,
      last : string 
  },
  birth : Date,
  death : Date,
  contribs : string[],
  awards : {
  award : string,
  year : number,
  by : string 
  }[]
}



/**
 * COMMENT: THERE SHOULD BE A BETTER WAY TO RESTRICT THE BIOSSERVICE INSTANCE
 */


// class AwardsSchema {
//   award: string;
//   year: string;
//   by: string;
// }