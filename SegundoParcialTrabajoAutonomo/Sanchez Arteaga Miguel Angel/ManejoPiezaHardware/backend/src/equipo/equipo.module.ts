import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipo, EquipoSchema } from './entities/equipo.entity';

@Module({
  controllers: [EquipoController],
  providers: [EquipoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Equipo.name,
        schema: EquipoSchema
      }
    ])
  ]
})
export class EquipoModule {}
