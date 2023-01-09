import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';

@Injectable()
export class PrestamoService {

  constructor(
    @InjectModel(Prestamo.name)
    private readonly ModeloPrestamo: Model<Prestamo>
  ){

  }
  async create(createPrestamoDto: CreatePrestamoDto) {
    try {
      const Prestamo = await this.ModeloPrestamo.create( createPrestamoDto )
      return Prestamo;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    const VerPrestamos = await this.ModeloPrestamo.find()
    return VerPrestamos;
  }

  async findOne(id: string) {
    let prestamo: Prestamo;

    if( !prestamo && isValidObjectId(id)){
      prestamo = await this.ModeloPrestamo.findById( id )
    }

    if( !prestamo )
    throw new NotFoundException('No se encontro el elemtno');

  return prestamo;
  }

  async update(id: string, updatePrestamoDto: UpdatePrestamoDto) {
    try {
      const prestamo = await this.ModeloPrestamo.findByIdAndUpdate(id, updatePrestamoDto)
      return { ...updatePrestamoDto };
    } catch (error) {
      throw new NotFoundException('Error-elemento a actualizar no encontrado')
    }
  }

  async remove(id: string) {
    try {
      const prestamo = await this.ModeloPrestamo.findById( id )
      await prestamo.deleteOne()
      return prestamo
    } catch (error) {
      throw new NotFoundException('Error-elemento a eliminar no encontrado')
    }
  }
}
