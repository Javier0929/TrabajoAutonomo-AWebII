import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFormDto } from './dto/create-form.dto';
import { Form } from './entities/form.entity';

@Injectable()
export class FormService {

  constructor(
    @InjectModel(Form.name)
    private readonly FormModel: Model<Form>
  ){}

  async create(createFormDto: CreateFormDto) {
    const form = await this.FormModel.create(createFormDto)
      return form;
  }

  async findAll() {
    const BuscarForm = await this.FormModel.find()
    return BuscarForm;
  }
}
