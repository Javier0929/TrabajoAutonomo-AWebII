import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prestamo } from './entities/prestamo.entity';

@ApiTags('Documentacion de la Entidad Prestamo')
@Controller('prestamo')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) {}

  @Post()
  @ApiResponse({status: 201, description:'Creacion correcta del Modelo Prestamo', type:Prestamo })
  @ApiResponse({status: 500, description:'Error interno al intentar crear el Modelo' })
  create(@Body() createPrestamoDto: CreatePrestamoDto) {
    return this.prestamoService.create(createPrestamoDto);
  }

  @Get()
  @ApiResponse({status: 200, description:'Busqueda completa de los Datos en DB - Modelo Prestamo' })
  findAll() {
    return this.prestamoService.findAll();
  }

  @Get(':id')
  @ApiResponse({status: 200, description:'Busqueda por id en DB Completada' })
  @ApiResponse({status: 404, description:'Busqueda por id no encontrada en DB' })
  findOne(@Param('id') id: string) {
    return this.prestamoService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description:'Actualizacion de Un modelo Prestamo Exitosa', type:Prestamo })
  @ApiResponse({status: 404, description:'Modelo a actualizar no encontrado' })
  update(@Param('id') id: string, @Body() updatePrestamoDto: UpdatePrestamoDto) {
    return this.prestamoService.update(id, updatePrestamoDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description:'Eliminacion de un modelo Prestamo Exitosa' })
  @ApiResponse({status: 404, description:'Modelo a eliminar no encontrado' })
  remove(@Param('id') id: string) {
    return this.prestamoService.remove(id);
  }
}
