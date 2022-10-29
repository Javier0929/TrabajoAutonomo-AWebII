import { Module } from '@nestjs/common';
import { ManejoService } from './manejo.service';
import { ManejoController } from './manejo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Manejo, ManejoSchema } from './entities/manejo.entity';

@Module({
  controllers: [ManejoController],
  providers: [ManejoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Manejo.name,
        schema: ManejoSchema
      }
    ])
  ]
})
export class ManejoModule {}
