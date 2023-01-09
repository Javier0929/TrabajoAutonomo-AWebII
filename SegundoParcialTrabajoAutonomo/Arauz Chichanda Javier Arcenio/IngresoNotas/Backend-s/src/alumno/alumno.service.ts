import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';


@Injectable()
export class AlumnoService {

  constructor(
    @InjectRepository(Alumno)
    private alumnoRepositorio: Repository<Alumno>
  ) { }
  async create(createAlumnoDto: CreateAlumnoDto) {
      try {
        const crearAlumno =  this.alumnoRepositorio.create(createAlumnoDto)
        await this.alumnoRepositorio.save(crearAlumno)
        console.log(crearAlumno)
      } catch (error) {
        throw new BadRequestException('No se pudo agregar el alumno')
      }
  }

  findAll() {
    return this.alumnoRepositorio.find()
  }

  async findOne(id: string) {
    let buscarUno: Alumno
    buscarUno = await this.alumnoRepositorio.findOneById(id)
    if (!buscarUno) {
      throw new NotFoundException('Alumno no encontrado')
    }
    return buscarUno
  }

  

  async update(id: string, updateAlumnoDto: UpdateAlumnoDto) {
    const actualizarAlumno = await this.alumnoRepositorio.findOne({
      where: { id }
    })
    if (!actualizarAlumno) {
      throw new NotFoundException('No se pudo actualizar porque no existe')
    }
    return this.alumnoRepositorio.save({
      ...actualizarAlumno,
      ...updateAlumnoDto
    })
 

  }

  async remove(id: string) {
    const eliminarAlumno = await this.alumnoRepositorio.findOne({
      where: { id }
    })
    if (!eliminarAlumno) {
      throw new NotFoundException('No se pudo eliminar porque no existe')
    }
    return this.alumnoRepositorio.remove({
      ...eliminarAlumno
    })
  }
}
