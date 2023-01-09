import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Form, FormSchema } from './entities/form.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FormController],
  providers: [FormService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Form.name,
        schema: FormSchema
      }
    ])
  ]
})
export class FormModule {}
