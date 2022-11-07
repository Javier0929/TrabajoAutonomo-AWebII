import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCanalDto } from './dto/create-canal.dto';
import { UpdateCanalDto } from './dto/update-canal.dto';
import { Canal } from './entities/canal.entity';


@Injectable()
export class CanalService {

  constructor(
    @InjectRepository(Canal)
    private canalRepositorio: Repository<Canal>
  ) { }
  async create(createCanalDto: CreateCanalDto) {
      try {
        const crearCanal = await this.canalRepositorio.create(createCanalDto)
        await this.canalRepositorio.save(crearCanal)
      } catch (error) {
        throw new BadRequestException('No se pudo agregar el canal')
      }
  }

  findAll() {
    return this.canalRepositorio.find()
  }

  async findOne(id: string) {
    let buscarUno: Canal
    buscarUno = await this.canalRepositorio.findOneById(id)
    if (!buscarUno) {
      throw new NotFoundException('Canal no encontrado')
    }
    return buscarUno
  }

  

  async update(id: string, updateCanalDto: UpdateCanalDto) {
    const actualizarCanal = await this.canalRepositorio.findOne({
      where: { id }
    })
    if (!actualizarCanal) {
      throw new NotFoundException('No se pudo actualizar porque no existe')
    }
    return this.canalRepositorio.save({
      ...actualizarCanal,
      ...updateCanalDto
    })
 

  }

  async remove(id: string) {
    const eliminarCanal = await this.canalRepositorio.findOne({
      where: { id }
    })
    if (!eliminarCanal) {
      throw new NotFoundException('No se pudo eliminar porque no existe')
    }
    return this.canalRepositorio.remove({
      ...eliminarCanal
    })
  }
}