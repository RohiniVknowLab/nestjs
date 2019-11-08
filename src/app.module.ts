import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SourceModule } from './sources/sources.module';

@Module({
  imports: [SourceModule, MongooseModule.forRoot('mongodb://157.46.47.34:27017/VKnowLab')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
