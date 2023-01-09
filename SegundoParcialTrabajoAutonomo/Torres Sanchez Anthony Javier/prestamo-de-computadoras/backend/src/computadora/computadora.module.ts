import { Module } from '@nestjs/common';
import { ComputadoraService } from './computadora.service';
import { ComputadoraController } from './computadora.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Computadora, SchemaComputadora } from './entities/computadora.entity';

@Module({
  controllers: [ComputadoraController],
  providers: [ComputadoraService],
  imports: [
    MongooseModule.forFeature([
    {
      name: Computadora.name,
      schema: SchemaComputadora
    }
  ])]
})
export class ComputadoraModule {}
