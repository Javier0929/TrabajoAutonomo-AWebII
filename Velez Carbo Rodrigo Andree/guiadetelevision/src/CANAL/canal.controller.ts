import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CanalService } from './canal.service';
import { CreateCanalDto } from './dto/create-canal.dto';
import { UpdateCanalDto } from './dto/update-canal.dto';
import { Canal } from './entities/canal.entity';

@Controller('canal')
export class CanalController {
  constructor(private readonly canalService: CanalService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Datos correctamente ingresados', type:Canal})
  @ApiResponse({ status: 400, description: 'Error al insertar los datos' })
  create(@Body() createCanalDto: CreateCanalDto) {
    return this.canalService.create(createCanalDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  findAll() {
    return this.canalService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.canalService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Datos actualizados correctamente', type:Canal })
  @ApiResponse({ status: 404, description: 'Error al actualizar los datos' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCanalDto: UpdateCanalDto) {
    return this.canalService.update(id, updateCanalDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Datos correctamente eliminados', type:Canal })
  @ApiResponse({ status: 404, description: 'Error al eliminar los datos' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.canalService.remove(id);
  }
}
