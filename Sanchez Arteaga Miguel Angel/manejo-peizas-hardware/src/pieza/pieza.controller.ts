import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PiezaService } from './pieza.service';
import { CreatePiezaDto } from './dto/create-pieza.dto';
import { UpdatePiezaDto } from './dto/update-pieza.dto';
import { Pieza } from './entities/pieza.entity';

@ApiTags('Pieza Entity')
@Controller('pieza')
export class PiezaController {
  constructor(private readonly piezaService: PiezaService) {}

  @Post()
  @ApiResponse({status:201, description: 'Creacion de de la pieza', type: Pieza})
  @ApiResponse({status:400, description: 'Datos duplicados en la creacion'})
  @ApiResponse({status:500, description: 'Error del servicio en la creacion'})
  create(@Body() createPiezaDto: CreatePiezaDto) {
    return this.piezaService.create(createPiezaDto);
  }

  @Get()
  @ApiResponse({status:201, description: 'Busqueda general de los elementos en la DB'})
  findAll() {
    return this.piezaService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description:'Se pasa el id como parametro para buscar un elemnto',
    type: String
  })
  @ApiResponse({status: 201, description: 'Busqueda de elemento por id'})
  @ApiResponse({status: 201, description: 'Busqueda de elemento por Identificaion de Pieza'})
  @ApiResponse({status: 404, description: 'Elemento no encontrado en la DB'})
  findOne(@Param('id') id: string) {
    return this.piezaService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description:'Se pasa el id como parametro de lo que se desea actualizar',
    type: String
  })
  @ApiResponse({status:201, description:'Actualizacion de datos en la DB', type: Pieza})
  @ApiResponse({status:500, description:'Error en la actulizacion- Error del servidor'})
  update(@Param('id') id: string, @Body() updatePiezaDto: UpdatePiezaDto) {
    return this.piezaService.update(id, updatePiezaDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description:'Se pasa el id como parametro de lo que se desea eliminar',
    type: String
  })
  @ApiResponse({status: 201, description:'Eliminacion de un elemnto en la DB'})
  @ApiResponse({status: 404, description:'Elemento a eliminar no encontrado'})
  remove(@Param('id') id: string) {
    return this.piezaService.remove(id);
  }
}
