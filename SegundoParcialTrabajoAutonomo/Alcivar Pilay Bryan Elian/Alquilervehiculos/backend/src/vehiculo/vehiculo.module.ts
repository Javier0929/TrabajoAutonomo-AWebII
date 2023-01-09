import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehiculo, VehiculoSchema } from './entities/vehiculo.entity';

@Module({
  controllers: [VehiculoController],
  providers: [VehiculoService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Vehiculo.name,
        schema: VehiculoSchema
        
      }

    ]


    )
  ]
})
export class VehiculoModule {}
