import { Module } from '@nestjs/common';
import { PiezaService } from './pieza.service';
import { PiezaController } from './pieza.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pieza, PiezaSchema } from './entities/pieza.entity';

@Module({
  controllers: [PiezaController],
  providers: [PiezaService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Pieza.name,
        schema: PiezaSchema
      }
    ])
  ]
})
export class PiezaModule {}
