import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePrestamistaDto } from './dto/create-prestamista.dto';
import { UpdatePrestamistaDto } from './dto/update-prestamista.dto';
import { Prestamista } from './entities/prestamista.entity';

@Injectable()
export class PrestamistaService {
  constructor(
    @InjectModel( Prestamista.name )
    private readonly PrestamistaModel: Model<Prestamista>
  ){

  }
  async create(createPrestamistaDto: CreatePrestamistaDto) {
    try {
      const prestamista = await this.PrestamistaModel.create( createPrestamistaDto )
      return prestamista;
    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException('Error la identificaion no puede duplicarse')
      }
    }
  }

  findAll() {
    const prestamista = this.PrestamistaModel.find()
    return prestamista;
  }

  async findOne(id: string) {
    let prestamista: Prestamista;

    if( isValidObjectId(id) ){
      prestamista = await this.PrestamistaModel.findById( id )
    };

    if( !prestamista ){
      prestamista = await this.PrestamistaModel.findOne({
        Identificaion: id
      })
    };

    if( !prestamista )
      throw new NotFoundException('No se encontro el elemtno');

    return prestamista;
  }

  async update(id: string, updatePrestamistaDto: UpdatePrestamistaDto) {
    try {
      const prestamista = await this.PrestamistaModel.findByIdAndUpdate(id, updatePrestamistaDto)
      return { ...updatePrestamistaDto };
    } catch (error) {
      throw new NotFoundException('Error elemento a actualizar no encontrado')
    }
  }

  async remove(id: string) {
    try {
      const prestamista = await this.PrestamistaModel.findById( id )
      await prestamista.deleteOne()
      return prestamista
    } catch (error) {
      throw new NotFoundException('Error elemento a eliminar no encontrado')
    }
  }
}
