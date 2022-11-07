import { Module } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { GuiaController } from './guia.controller';
import { Guia } from './entities/guia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Guia])
  ],
  controllers: [GuiaController],
  providers: [GuiaService]
})
export class GuiaModule {}