import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateParquearDto } from './dto/create-parquear.dto';
import { UpdateParquearDto } from './dto/update-parquear.dto';
import { Parquear } from './entities/parquear.entity';

@Injectable()
export class ParquearService {

  constructor(
    @InjectModel(Parquear.name)
    private readonly ParquearModelo: Model<Parquear>
  ) {}

  async create(createParquearDto: CreateParquearDto) {
    try {
      const Createparquear = await this.ParquearModelo.create(createParquearDto);
      return Createparquear;
    } catch (error) {
      throw new InternalServerErrorException('Error interno del servidor')
    }
  }

  async findAll() {

    return await this.ParquearModelo.find({}, { _id: 1, __v: 0 });
  }

  async findOne(id: string) {

    let Findparquear: Parquear;

    if (isValidObjectId(id)) {
      Findparquear = await this.ParquearModelo.findById(id)
    }

    if (!Findparquear) {
      throw new NotFoundException(`El parqueo con identificador ${id} no se encuentra `)
    }

    return Findparquear;
  }

  async update(id: string, updateParquearDto: UpdateParquearDto) {
    try {
      
      const Updateparquear = await this.ParquearModelo.findById(id)
      await Updateparquear.updateOne(updateParquearDto)

      return { ...updateParquearDto }
    } catch (error) {
      throw new NotFoundException(`No existe el parqueradp con el id: ${id}que quieres actualizar`)
    }

  }

  async remove(id: string) {

    try {
      const Deleteparquear = await this.ParquearModelo.findByIdAndRemove(id)
      return (`parqueradp eliminado ${Deleteparquear}`);
    } catch (error) {
      throw new NotFoundException(`No existe el parqueradp con el id: ${id}que quieres eliminar`)
    }
  }
}
