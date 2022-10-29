import { Module } from '@nestjs/common';
import { EspacioParqueoService } from './espacio-parqueo.service';
import { EspacioParqueoController } from './espacio-parqueo.controller';
import { Espacioparqueo, ParqueoSchema } from './entities/espacio-parqueo.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EspacioParqueoController],
  providers: [EspacioParqueoService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Espacioparqueo.name,
        schema: ParqueoSchema,
      }
    ])
  ]

})
export class EspacioParqueoModule {}
