import { Module } from '@nestjs/common';
import { ParquearService } from './parquear.service';
import { ParquearController } from './parquear.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParquearSchema, Parquear } from './entities/parquear.entity';

@Module({
  controllers: [ParquearController],
  providers: [ParquearService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Parquear.name,
        schema: ParquearSchema,
      }
    ])
  ]
})
export class ParquearModule {}
