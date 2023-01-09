import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactanoDto } from './dto/create-contactano.dto';
import { UpdateContactanoDto } from './dto/update-contactano.dto';
import { Contactano } from './entities/contactano.entity';

@Injectable()
export class ContactanosService {
  constructor(
    @InjectModel(Contactano.name)
    private readonly ContactanosModel: Model<Contactano>
  ){}
  async create(createContactanoDto: CreateContactanoDto) {
    const contactanoss = await this.ContactanosModel.create(createContactanoDto)
    return contactanoss;
  }

  async findAll() {
    const BuscarContactanos = await this.ContactanosModel.find()
    return BuscarContactanos;
  }
}
