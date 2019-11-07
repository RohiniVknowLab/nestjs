import { Injectable, NotFoundException } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async testSource(host_name : String, port : Number , db_name : String){

    let connection;

    try{
      connection = await mongoose.connect('mongodb://' + host_name + ':' + port + '/' + db_name );
    }catch(err){
      console.log(err )
      throw new NotFoundException('Could not connect to server');
    }
  }
}
