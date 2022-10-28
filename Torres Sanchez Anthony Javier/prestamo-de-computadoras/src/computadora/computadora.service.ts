import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateComputadoraDto } from './dto/create-computadora.dto';
import { UpdateComputadoraDto } from './dto/update-computadora.dto';
import { Computadora } from './entities/computadora.entity';

@Injectable()
export class ComputadoraService {
  constructor(
    @InjectModel( Computadora.name )
    private readonly ComputadoraModel: Model<Computadora>
  ){

  }
  async create(createComputadoraDto: CreateComputadoraDto) {
    try {
      const computadora = await this.ComputadoraModel.create( createComputadoraDto )
      return computadora;
    } catch (error) {
        throw new InternalServerErrorException('Error del servidor al intentar crear el elmento')
    }
  }

  findAll() {
    const computadora = this.ComputadoraModel.find()
    return computadora;
  }

  async findOne(id: string) {
    let computadora: Computadora;

    if( isValidObjectId(id) ){
      computadora = await this.ComputadoraModel.findById( id )
    };

    
    if( !computadora )
      throw new NotFoundException('No se encontro el elemtno que intenta buscar');

    return computadora;

  }

  async update(id: string, updateComputadoraDto: UpdateComputadoraDto) {
    try {
      const computadora = await this.ComputadoraModel.findByIdAndUpdate(id, updateComputadoraDto)
      return { ...updateComputadoraDto };
    } catch (error) {
      throw new NotFoundException('Error-elemento a actualizar no encontrado')
    }
  }

  async remove(id: string) {
    try {
      const computadora = await this.ComputadoraModel.findById( id )
      await computadora.deleteOne()
      return computadora
    } catch (error) {
      throw new NotFoundException('Error-elemento a eliminar no encontrado')
    }
  }
}
