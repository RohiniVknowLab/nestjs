import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Source } from './sources.model'

@Injectable()
export class SourceService {

    constructor( @InjectModel('Source') private readonly sourceModel :  Model<Source> ) { }

    async insertSource(
        host_name : String, 
        port : Number, 
        db_name : String ){

        const newSource = new this.sourceModel({

            host_name :  host_name,
            port : port ,
            db_name : db_name 
        });

        const result = await newSource.save();
        return result.id as String
    }

    async getAllSources(){

        const sources = await this.sourceModel.find().exec();
        return sources.map(source => ({ 
            id : source.id,
            host_name :source.host_name,
            port : source.port,
            db_name : source.db_name
        }));
    }

    async getSingleSource(id : String ){

        const source = await this.findSourceById(id)

        return { id : source.id, host_name: source.host_name, port : source.port, db_name : source.db_name}
    }

    async updateSource( 
        id : String,
        host_name : String, 
        port : Number, 
        db_name : String ){

        const updatedSource  =  await this.findSourceById(id);

        if(host_name){
            updatedSource.host_name = host_name;
        }
        if(port){
            updatedSource.port = port;
        }
        if(db_name){
            updatedSource.db_name = db_name;
        }
        const result = await updatedSource.save();
        return result;
    }

    async deleteSource(id : String){

       const result =  await this.sourceModel.deleteOne({_id : id }).exec();
        if(result.n === 0 ){
            throw new NotFoundException('Could not find source');
        }
    }

   

    private async findSourceById( id : String) :  Promise<Source>{

        let source;

        try{
            source = await this.sourceModel.findById(id).exec();

        }catch(err){
            throw new NotFoundException('Could not find source');
        }

        if(!source){
            throw new NotFoundException('Could not find source');
        }
        return source;

    }
}