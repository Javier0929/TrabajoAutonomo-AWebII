import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { Nota } from './entities/nota.entity';


@Injectable()
export class NotaService {
  constructor(
    @InjectRepository(Nota)
    private notaRepositorio: Repository<Nota>
  ) { }
  async create(createNotaDto: CreateNotaDto) {
    try {
      const crearNota = await this.notaRepositorio.create(createNotaDto)
      await this.notaRepositorio.save(crearNota)
    } catch (error) {
      throw new BadRequestException('No se pudo agregar la nota')
    }
  }

  findAll() {
    return this.notaRepositorio.find()
  }

  async findOne(id: string) {
    let buscarUno: Nota
    buscarUno = await this.notaRepositorio.findOneById(id)
    if (!buscarUno) {
      throw new NotFoundException('nota no encontrada')
    }
    return buscarUno
  }

  async update(id: string, updateNotaDto: UpdateNotaDto) {
    const actualizarNota = await this.notaRepositorio.findOne({
      where: { id }
    })
    if (!actualizarNota) {
      throw new NotFoundException('No se pudo actualizar porque no existe la asignatura')
    }
    return this.notaRepositorio.save({
      ...actualizarNota,
      ...updateNotaDto
    })
  }

  async remove(id: string) {
    const eliminarNota = await this.notaRepositorio.findOne({
      where: { id }
    })
    if (!eliminarNota) {
      throw new NotFoundException('No se pudo eliminar porque no existe la Nota')
    }
    return this.notaRepositorio.remove({
      ...eliminarNota
    })  }
}
