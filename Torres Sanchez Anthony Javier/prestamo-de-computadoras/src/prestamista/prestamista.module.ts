import { Module } from '@nestjs/common';
import { PrestamistaService } from './prestamista.service';
import { PrestamistaController } from './prestamista.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Prestamista, SchemaPrestamista } from './entities/prestamista.entity';

@Module({
  controllers: [PrestamistaController],
  providers: [PrestamistaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Prestamista.name,
        schema: SchemaPrestamista
      }
    ])
  ]
})
export class PrestamistaModule {}
