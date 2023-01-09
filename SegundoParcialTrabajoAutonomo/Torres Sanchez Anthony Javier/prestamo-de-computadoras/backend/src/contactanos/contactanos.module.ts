import { Module } from '@nestjs/common';
import { ContactanosService } from './contactanos.service';
import { ContactanosController } from './contactanos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contactano, ContactanosSchema } from './entities/contactano.entity';

@Module({
  controllers: [ContactanosController],
  providers: [ContactanosService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Contactano.name,
        schema: ContactanosSchema
      }
    ])
  ]
})
export class ContactanosModule {}
