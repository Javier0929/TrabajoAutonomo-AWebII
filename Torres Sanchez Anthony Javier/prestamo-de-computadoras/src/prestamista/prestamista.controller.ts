import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestamistaService } from './prestamista.service';
import { CreatePrestamistaDto } from './dto/create-prestamista.dto';
import { UpdatePrestamistaDto } from './dto/update-prestamista.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prestamista } from './entities/prestamista.entity';

@ApiTags('Documentacion de la Entidad Prestanista')
@Controller('prestamista')
export class PrestamistaController {
  constructor(private readonly prestamistaService: PrestamistaService) {}

  @Post()
  @ApiResponse({status: 201, description:'Creacion correcta del Modelo Prestamista', type:Prestamista })
  @ApiResponse({status: 500, description:'Error interno al intentar crear el Modelo' })
  create(@Body() createPrestamistaDto: CreatePrestamistaDto) {
    return this.prestamistaService.create(createPrestamistaDto);
  }

  @Get()
  @ApiResponse({status: 200, description:'Busqueda completa de los Datos en DB' })
  findAll() {
    return this.prestamistaService.findAll();
  }

  @Get(':id')
  @ApiResponse({status: 200, description:'Busqueda por id en DB Completada del Modelo Prestamista' })
  @ApiResponse({
    status: 200, description:'Busqueda por Identificaion en DB Completada del Modelo Prestamista' 
  })
  @ApiResponse({status: 404, description:'Busqueda por id no encontrada en DB' })
  @ApiResponse({status: 500, description:'Internal server errror al buscar por id' })
  findOne(@Param('id') id: string) {
    return this.prestamistaService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description:'Actualizacion de Un modelo Prestamista Exitosa', type:Prestamista })
  @ApiResponse({status: 404, description:'Modelo a actualizar no encontrado' })
  update(@Param('id') id: string, @Body() updatePrestamistaDto: UpdatePrestamistaDto) {
    return this.prestamistaService.update(id, updatePrestamistaDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description:'Eliminacion de nn modelo computadora Exitosa' })
  @ApiResponse({status: 404, description:'Modelo a eliminar no encontrado' })
  remove(@Param('id') id: string) {
    return this.prestamistaService.remove(id);
  }
}
