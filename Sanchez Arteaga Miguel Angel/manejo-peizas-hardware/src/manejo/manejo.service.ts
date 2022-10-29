import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateManejoDto } from './dto/create-manejo.dto';
import { UpdateManejoDto } from './dto/update-manejo.dto';
import { Manejo } from './entities/manejo.entity';

@Injectable()
export class ManejoService {
  constructor(
    @InjectModel( Manejo.name )
    private readonly ModelManejo: Model<Manejo>
  ){

  }
  async create(createManejoDto: CreateManejoDto) {
    try {
      const EnviarDatos = this.ModelManejo.create( createManejoDto )
      return EnviarDatos;
    } catch (error) {
      throw new InternalServerErrorException('Error al ingresar los datos, revise los logs')
    }
  }

  async findAll() {
    const DatosManejo = await this.ModelManejo.find()
    return DatosManejo;
  }

  async findOne(id: string) {
    let manejo: Manejo;

    //buscar por id
    if( isValidObjectId(id) ){
      manejo = await this.ModelManejo.findById( id )
    }

    if(!manejo){
      throw new NotFoundException('El dato que intenta buscar no se ha encontrado')
    }

    return manejo;
  }

  async update(id: string, updateManejoDto: UpdateManejoDto) {
    const manejo = this.ModelManejo.findById( id );
    await manejo.updateOne(updateManejoDto)
    return{...updateManejoDto}
  }

  async remove(id: string) {
    try {
      const manejo = this.ModelManejo.findById( id );
      await manejo.deleteOne()
      return 'El elemento ha sido eliminado'
    } catch (error) {
      throw new NotFoundException('Error- El elemento que intenta eliminar no existe en la DB')
    }
  }
}
