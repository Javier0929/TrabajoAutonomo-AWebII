import { Module } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';
import { AsignaturaController } from './asignatura.controller';
import { Asignatura } from './entities/asignatura.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Asignatura])
  ],
  controllers: [AsignaturaController],
  providers: [AsignaturaService]
})
export class AsignaturaModule {}
