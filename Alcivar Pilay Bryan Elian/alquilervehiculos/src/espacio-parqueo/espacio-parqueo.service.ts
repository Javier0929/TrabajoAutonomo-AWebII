import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateEspacioParqueoDto } from './dto/create-espacio-parqueo.dto';
import { UpdateEspacioParqueoDto } from './dto/update-espacio-parqueo.dto';
import { Espacioparqueo } from './entities/espacio-parqueo.entity';

@Injectable()
export class EspacioParqueoService {

  constructor(
    @InjectModel(Espacioparqueo.name)
    private readonly EspacioparqueoModelo: Model<Espacioparqueo>
  ) {}

  async create(createEspacioParqueoDto: CreateEspacioParqueoDto) {
    try {
      const CreateEspacioparqueo = await this.EspacioparqueoModelo.create(createEspacioParqueoDto);
      return CreateEspacioparqueo;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Error el espacio parqueo ya existe')
      }
    }
  }

  async findAll() {

    return await this.EspacioparqueoModelo.find({}, { _id: 1, __v: 0 });

  }

  async findOne(id: string) {
    let Findespacioparqueo: Espacioparqueo;

    if (isValidObjectId(id)) {
      Findespacioparqueo = await this.EspacioparqueoModelo.findById(id)
    }
  
    if (!Findespacioparqueo) {
      throw new NotFoundException(`El espacio parqueo con identificador ${id} no se encuentra `)
    }

    return Findespacioparqueo;
  }

  async update(id: string, updateEspacioParqueoDto: UpdateEspacioParqueoDto) {
    try {

      const UpdateEspacioparqueo = await this.EspacioparqueoModelo.findById(id)
      await UpdateEspacioparqueo.updateOne(updateEspacioParqueoDto)
      return { ...updateEspacioParqueoDto }

    } catch (error) {
      throw new NotFoundException(`No existe el espacio parqueo con el id: ${id}que quieres actualizar`)
    }

  }

  async remove(id: string) {
    try {

      const Deleteespacioparqueo = await this.EspacioparqueoModelo.findByIdAndRemove(id)
      return (`parqueradp eliminado ${Deleteespacioparqueo}`);

    } catch (error) {

      throw new NotFoundException(`No existe el espacio parqueo con el id: ${id}que quieres eliminar`)
   
    }
  }
}
