import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Prestamo, ShcemaPrestamos } from './entities/prestamo.entity';

@Module({
  controllers: [PrestamoController],
  providers: [PrestamoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Prestamo.name,
        schema: ShcemaPrestamos
      }
    ])
  ]
})
export class PrestamoModule {}
