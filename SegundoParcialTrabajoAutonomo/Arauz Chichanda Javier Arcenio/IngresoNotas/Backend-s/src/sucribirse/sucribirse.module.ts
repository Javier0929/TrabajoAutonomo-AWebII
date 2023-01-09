import { Module } from '@nestjs/common';
import { SucribirseService } from './sucribirse.service';
import { SucribirseController } from './sucribirse.controller';
import { Sucribirse } from './entities/sucribirse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SucribirseController],
  providers: [SucribirseService],
  imports:[

    TypeOrmModule.forFeature([Sucribirse])
  ]
})
export class SucribirseModule {}
