import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';

@Injectable()
export class VehiculoService {

  constructor(
    @InjectModel(Vehiculo.name)
    private readonly VehiculoModelo: Model<Vehiculo>
  ) {}


  async create(createVehiculoDto: CreateVehiculoDto) {
    try {
      const Createvehiculo = await this.VehiculoModelo.create(createVehiculoDto);
      return Createvehiculo;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Error la placa del vehículo ya existe')
      }
    }
  }

  async findAll() {

    return await this.VehiculoModelo.find({}, { _id: 1, __v: 0 });
  }

  async findOne(id: string) {
    let Findvehiculo: Vehiculo;
    if (isValidObjectId(id)) {
      Findvehiculo = await this.VehiculoModelo.findById(id)
    }
    if (!Findvehiculo) {
      Findvehiculo = await this.VehiculoModelo.findOne({ Placa: id })
    }
    if (!Findvehiculo) {
      throw new NotFoundException(`El vehículo con identificador o placa ${id} no se encuentra `)
    }

    return Findvehiculo;
  }

  async update(id: string, updateVehiculoDto: UpdateVehiculoDto) {
    try {
      const Updatevehiculo = await this.VehiculoModelo.findById(id)
      await Updatevehiculo.updateOne(updateVehiculoDto)

      return { ...updateVehiculoDto }
    } catch (error) {
      throw new NotFoundException(`No existe el vehículo con el id: ${id}que quieres actualizar`)
    }

  }

  async remove(id: string) {

    try {
      const Deletevehiculo = await this.VehiculoModelo.findById(id)
      await Deletevehiculo.delete()
      return ('Vehículo eliminado' );
    } catch (error) {
      throw new NotFoundException(`No existe el vehículo con el id: ${id}que quieres eliminar`)
    }
  }
}
