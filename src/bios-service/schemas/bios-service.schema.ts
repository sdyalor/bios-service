import { Schema } from 'mongoose';
import { Document } from 'mongoose';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// class AwardsSchema {
//   award: string;
//   year: string;
//   by: string;
// }
export const BiosServiceSchema = new Schema({
  name: {
    first: {type:String,required: true},
    last: {type:String,required: true},
  },
  birth: {type:Date,required: true},
  death: {type:Date,required: true},
  contribs: [
    {type:String,required: true},
  ],
  awards: [
  {
    award: {type:String,required: true},
    year: {type:Number,required: true},
    by: {type:String,required: true},
  }
]
})
// @Schema()
// class AwardsSchema {
//   @Prop()
//   award: string;
//   @Prop()
//   year: string;
//   @Prop()
//   by: string;
// }
// export const awardsSchema = SchemaFactory.createForClass(AwardsSchema);

// @Schema()
// export class BiosServiceSchema extends Document {
//   @Prop()
//   name: {
//     first: string;
//     last: string;
//   }
//   @Prop()
//   birth: Date;
//   @Prop()
//   death: Date;
//   @Prop()
//   contribs: string[];
//   @Prop({type: awardsSchema})
//   awards: AwardsSchema[]
// }
// export const biosServiceSchema = SchemaFactory.createForClass(BiosServiceSchema);