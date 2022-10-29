import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { EquipoService } from './equipo.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';

@ApiTags('Equipo Entity')
@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Post()
  @ApiResponse({status:201, description: 'Creacion de de la pieza', type: Equipo})
  @ApiResponse({status:500, description: 'Error del servicio en la creacion'})
  create(@Body() createEquipoDto: CreateEquipoDto) {
    return this.equipoService.create(createEquipoDto);
  }

  @Get()
  @ApiResponse({status:201, description: 'Busqueda general de los elementos en la DB'})
  findAll() {
    return this.equipoService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description:'Se pasa el id como parametro para buscar un elemnto',
    type: String
  })
  @ApiResponse({status: 201, description: 'Busqueda de elemento por id'})
  @ApiResponse({status: 404, description: 'Elemento no encontrado en la DB'})
  findOne(@Param('id') id: string) {
    return this.equipoService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description:'Se pasa el id como parametro de lo que se desea actualizar',
    type: String
  })
  @ApiResponse({status:201, description:'Actualizacion de datos en la DB', type: Equipo})
  @ApiResponse({status:500, description:'Error en la actulizacion- Error del servidor'})
  update(@Param('id') id: string, @Body() updateEquipoDto: UpdateEquipoDto) {
    return this.equipoService.update(id, updateEquipoDto);
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
    return this.equipoService.remove(id);
  }
}
