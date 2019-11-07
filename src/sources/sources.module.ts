import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SourceController } from './sources.controller';
import { SourceService } from './sources.service';
import { SourceSchema } from './sources.model';

@Module({
  imports: [MongooseModule.forFeature([{ name :'Source' , schema : SourceSchema}])],
  controllers: [SourceController],
  providers: [SourceService],
})
export class SourceModule {}
