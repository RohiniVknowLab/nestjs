import * as mongoose from 'mongoose';

export const SourceSchema =  new mongoose.Schema({
     
    host_name : { type :String , required : false },
    port : { type : Number , required : false , default : 27017 },
    db_name : { type : String , required : true }

})

export interface Source extends mongoose.Document{

    id : String;
    host_name : String;
    port : Number;
    db_name :  String;

}