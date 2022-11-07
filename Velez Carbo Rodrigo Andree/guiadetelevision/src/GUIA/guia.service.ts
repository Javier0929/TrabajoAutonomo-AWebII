import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
import { Guia } from './entities/guia.entity';


@Injectable()
export class GuiaService {
  constructor(
    @InjectRepository(Guia)
    private guiaRepositorio: Repository<Guia>
  ) { }
  async create(createGuiaDto: CreateGuiaDto) {
    try {
      const crearGuia = await this.guiaRepositorio.create(createGuiaDto)
      await this.guiaRepositorio.save(crearGuia)
    } catch (error) {
      throw new BadRequestException('No se pudo agregar la nota')
    }
  }

  findAll() {
    return this.guiaRepositorio.find()
  }

  async findOne(id: string) {
    let buscarUno: Guia
    buscarUno = await this.guiaRepositorio.findOneById(id)
    if (!buscarUno) {
      throw new NotFoundException('guia no encontrada')
    }
    return buscarUno
  }

  async update(id: string, updateGuiaDto: UpdateGuiaDto) {
    const actualizarGuia = await this.guiaRepositorio.findOne({
      where: { id }
    })
    if (!actualizarGuia) {
      throw new NotFoundException('No se pudo actualizar porque no existe la guia')
    }
    return this.guiaRepositorio.save({
      ...actualizarGuia,
      ...updateGuiaDto
    })
  }

  async remove(id: string) {
    const eliminarGuia = await this.guiaRepositorio.findOne({
      where: { id }
    })
    if (!eliminarGuia) {
      throw new NotFoundException('No se pudo eliminar porque no existe la guia')
    }
    return this.guiaRepositorio.remove({
      ...eliminarGuia
    })  }
}
