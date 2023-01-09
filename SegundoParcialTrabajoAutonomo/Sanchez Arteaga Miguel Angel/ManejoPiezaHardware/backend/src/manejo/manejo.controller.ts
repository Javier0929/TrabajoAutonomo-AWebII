import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManejoService } from './manejo.service';
import { CreateManejoDto } from './dto/create-manejo.dto';
import { UpdateManejoDto } from './dto/update-manejo.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Manejo } from './entities/manejo.entity';

@ApiTags('Manejo Entity')
@Controller('manejo')
export class ManejoController {
  constructor(private readonly manejoService: ManejoService) {}

  @Post()
  @ApiResponse({status:201, description: 'Creacion de de la pieza', type: Manejo})
  @ApiResponse({status:500, description: 'Error del servidor en la creacion'})
  create(@Body() createManejoDto: CreateManejoDto) {
    return this.manejoService.create(createManejoDto);

  }

  @Get()
  @ApiResponse({status:201, description: 'Busqueda general de los elementos en la DB'})
  findAll() {
    return this.manejoService.findAll();
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
    return this.manejoService.findOne(id);
  }


  @Patch(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description:'Se pasa el id como parametro de lo que se desea actualizar',
    type: String
  })
  @ApiResponse({status:201, description:'Actualizacion de datos en la DB', type: Manejo})
  @ApiResponse({status:500, description:'Error en la actulizacion- Error del servidor'})
  update(@Param('id') id: string, @Body() updateManejoDto: UpdateManejoDto) {
    return this.manejoService.update(id, updateManejoDto);
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
    return this.manejoService.remove(id);
  }
}
