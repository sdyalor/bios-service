import * as mongoose from 'mongoose';
export const BiosSchema = new mongoose.Schema({
  name: { 
    first: String,
    last: String,
  },
  birth: Date,
  death: Date,
  contribs: [String],
  awards: [ Number ]
})

mongoose.model('').schema

export const AwardSchema = new mongoose.Schema({

})
export interface BiosModel {
  "_id"? : number,
  "name" : {
      "first" : string,
      "last" : string 
  },
  "birth" : Date,
  "death" : Date,
  "contribs" : string[],
  "awards" : AwardModel[]
}

export interface AwardModel {
    "award" : string,
    "year" : number,
    "by" : string 
}
