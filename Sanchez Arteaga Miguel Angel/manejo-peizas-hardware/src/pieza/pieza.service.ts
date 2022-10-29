import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePiezaDto } from './dto/create-pieza.dto';
import { UpdatePiezaDto } from './dto/update-pieza.dto';
import { Pieza } from './entities/pieza.entity';

@Injectable()
export class PiezaService {
  constructor(
    @InjectModel( Pieza.name )
    private readonly ModelPieza: Model<Pieza>
  ){}
  
  async create(createPiezaDto: CreatePiezaDto) {
     try {

      const pieza = await this.ModelPieza.create( createPiezaDto )
      return pieza;

     } catch (error) {
      if( error.code ===11000 ){
        throw new BadRequestException('La identificacion debe ser unica revise los datos')
      }
      throw new InternalServerErrorException('Error al crear las piezas, revise los logs')
     } 
  }

  async findAll() {

    const pieza = await this.ModelPieza.find()
    return pieza;

  }

  async findOne(id: string) {
    let pieza: Pieza

    //Buscar por Mongo id
    if( isValidObjectId( id ) ){
      pieza = await this.ModelPieza.findById( id )
    }

    //Buscar por Identificacion de Pieza
    if( !pieza ){
      pieza = await this.ModelPieza.findOne({Identificaion_Pieza: id})
    }

    if(!pieza){
      throw new NotFoundException('La pieza que intenta buscar no se encuntra!')
    }
    return pieza;
  }

  async update(id: string, updatePiezaDto: UpdatePiezaDto) {
    try {
      const pieza = await this.ModelPieza.findById( id )
      await pieza.updateOne( updatePiezaDto )
      return {...updatePiezaDto}
      
    } catch (error) {
      throw new InternalServerErrorException('Error en la actualizacion de datos - revisar Logs')
    }
  }

  async remove(id: string) {
    try {
      const pieza = await this.ModelPieza.findById(id)
      await pieza.deleteOne()
      return'La pieza ha sido eliminada'
      
    } catch (error) {
      throw new NotFoundException('Error- El elemento que intenta eliminar no existe en la DB')
    }
  }
}
