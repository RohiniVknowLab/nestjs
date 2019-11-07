import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { SourceService } from './sources.service';

@Controller('sources')
export class SourceController {
    constructor(private readonly sourceService : SourceService){}
 
    @Post()
    async addSource(
        @Body('host_name') sourceHostName : String,
        @Body('port') sourcePort : Number,
        @Body('db_name') sourceDbName : String
    ){
       const generatedId = await this.sourceService.insertSource(sourceHostName, sourcePort, sourceDbName);
       return generatedId;
    }

    @Get()
    async getAllSources(){
        const sources = await this.sourceService.getAllSources();
        return sources;
    }

    @Get(':id')
    async getSingleSource(@Param('id') id : String){
        const source  = await this.sourceService.getSingleSource(id);
        return source;
    }

    @Patch(':id')
    async updateSource(
        @Param('id') sourceId : String,
        @Body('host_name') sourceHostName : String,
        @Body('port') sourcePort : Number,
        @Body('db_name') sourceDbName : String
    ){
        const source = await this.sourceService.updateSource( sourceId, sourceHostName, sourcePort, sourceDbName);
        return source;
    }

    @Delete(':id')
    async removeSource(@Param('id') sourceId : String){
        await this.sourceService.deleteSource(sourceId);
        return "deleted";
    }

  
}