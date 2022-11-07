import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { NotaService } from './nota.service';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Guia } from './entities/guia.entity';

@Controller('guia')
export class GuiaController {
  constructor(private readonly guiaService: GuiaService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Datos correctamente ingresados', type:Guia})
  @ApiResponse({ status: 400, description: 'Error al insertar los datos' })
  create(@Body() createGuiaDto: CreateGuiaDto) {
    return this.guiaService.create(createGuiaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  findAll() {
    return this.guiaService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.guiaService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Datos actualizados correctamente', type:Guia })
  @ApiResponse({ status: 404, description: 'Error al actualizar los datos' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateGuiaDto: UpdateGuiaDto) {
    return this.guiaService.update(id, updateGuiaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Datos correctamente eliminados', type:Guia })
  @ApiResponse({ status: 404, description: 'Error al eliminar los datos' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.guiaService.remove(id);
  }
}