import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { Asignatura } from './entities/asignatura.entity';

@Injectable()
export class AsignaturaService {
  constructor(
    @InjectRepository(Asignatura)
    private asignaturaRepositorio: Repository<Asignatura>
  ) { }
  async create(createAsignaturaDto: CreateAsignaturaDto) {
    try {
      const crearAsignatura = await this.asignaturaRepositorio.create(createAsignaturaDto)
      await this.asignaturaRepositorio.save(crearAsignatura)
    } catch (error) {
      throw new BadRequestException('No se pudo agregar la asignatura')
    }
  }

  findAll() {
    return this.asignaturaRepositorio.find()
  }

  async findOne(id: string) {
    let buscarUno: Asignatura
    buscarUno = await this.asignaturaRepositorio.findOneById(id)
    if (!buscarUno) {
      throw new NotFoundException('Asignatura no encontrado')
    }
    return buscarUno
  }

  async update(id: string, updateAsignaturaDto: UpdateAsignaturaDto) {
    const actualizarAsignatura = await this.asignaturaRepositorio.findOne({
      where: { id }
    })
    if (!actualizarAsignatura) {
      throw new NotFoundException('No se pudo actualizar porque no existe la asignatura')
    }
    return this.asignaturaRepositorio.save({
      ...actualizarAsignatura,
      ...updateAsignaturaDto
    })
  }

  async remove(id: string) {
    const eliminarAsignatura = await this.asignaturaRepositorio.findOne({
      where: { id }
    })
    if (!eliminarAsignatura) {
      throw new NotFoundException('No se pudo eliminar porque no existe la asignatura')
    }
    return this.asignaturaRepositorio.remove({
      ...eliminarAsignatura
    })
  }
}
