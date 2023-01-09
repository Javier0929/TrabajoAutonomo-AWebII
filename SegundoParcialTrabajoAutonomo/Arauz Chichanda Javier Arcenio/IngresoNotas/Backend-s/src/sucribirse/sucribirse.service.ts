import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSucribirseDto } from './dto/create-sucribirse.dto';
import { UpdateSucribirseDto } from './dto/update-sucribirse.dto';
import { Sucribirse } from './entities/sucribirse.entity';

@Injectable()
export class SucribirseService {

  constructor(
    @InjectRepository(Sucribirse)
    private readonly suscribirseRepository: Repository<Sucribirse>

  ){}
  async create(createSucribirseDto: CreateSucribirseDto) {
    const suscribirse = this.suscribirseRepository.create( createSucribirseDto )
    await this.suscribirseRepository.save( suscribirse )
    return suscribirse;
  }

  findAll() {
    return this.suscribirseRepository.find();
  }


}
