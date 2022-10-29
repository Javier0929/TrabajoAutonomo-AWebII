import {  Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';

@Injectable()
export class EquipoService {

  constructor(
    @InjectModel( Equipo.name )
    private readonly EquipoModel: Model<Equipo>
  ){}


  async create(createEquipoDto: CreateEquipoDto) {
    try {

      const Equipo = await this.EquipoModel.create( createEquipoDto )
      return Equipo;

    } catch (error) {

      throw new InternalServerErrorException('Error al crear los datos de la entidad Equipo, Revise los logs')
    
    }
  }

  async findAll() {

    const BuscarEquipo = await this.EquipoModel.find()
    return BuscarEquipo;

  }

  async findOne(id: string) {

    let equipo: Equipo;

    if(isValidObjectId(id)){
      equipo = await this.EquipoModel.findById(id)
    }

    if( !equipo ){
      throw new NotFoundException('El dato que intenta buscar no se ha encontrado')
    }

    return equipo;

  }

  async update(id: string, updateEquipoDto: UpdateEquipoDto) {
    try {

      const equipo = await this.EquipoModel.findById(id)
      await equipo.updateOne(updateEquipoDto)
      return{...updateEquipoDto}

    } catch (error) {

      throw new InternalServerErrorException('Error en la actualizacion de datos - revisar Logs')
    
    }
  }

  async remove(id: string) {
    try {
      const equipo = await this.EquipoModel.findById(id)
      await equipo.deleteOne()
      return "El elemento ha sido eliminado con exito"
      
    } catch (error) {
      
      throw new NotFoundException('Error- El elemento que intenta eliminar no existe en la DB')

    }
  }
}
