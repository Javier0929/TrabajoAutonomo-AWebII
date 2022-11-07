import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProgramaDto } from './dto/create-programa.dts';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';

@Injectable()
export class ProgramaService {
  constructor(
    @InjectRepository(Programa)
    private programaRepositorio: Repository<Programa>
  ) { }
  async create(createProgramaDto: CreateProgramaDto) {
    try {
      const crearPrograma = await this.programaRepositorio.create(createProgramaDto)
      await this.programaRepositorio.save(crearPrograma)
    } catch (error) {
      throw new BadRequestException('No se pudo agregar el programa')
    }
  }

  findAll() {
    return this.programaRepositorio.find()
  }

  async findOne(id: string) {
    let buscarUno: Programa
    buscarUno = await this.programaRepositorio.findOneById(id)
    if (!buscarUno) {
      throw new NotFoundException('Programa no encontrado')
    }
    return buscarUno
  }

  async update(id: string, updateProgramaDto: UpdateProgramaDto) {
    const actualizarPrograma = await this.programaRepositorio.findOne({
      where: { id }
    })
    if (!actualizarPrograma) {
      throw new NotFoundException('No se pudo actualizar porque no existe el programa')
    }
    return this.programaRepositorio.save({
      ...actualizarPrograma,
      ...updateProgramaDto
    })
  }

  async remove(id: string) {
    const eliminarPrograma = await this.programaRepositorio.findOne({
      where: { id }
    })
    if (!eliminarPrograma) {
      throw new NotFoundException('No se pudo eliminar porque no existe el programa')
    }
    return this.programaRepositorio.remove({
      ...eliminarPrograma
    })
  }
}
