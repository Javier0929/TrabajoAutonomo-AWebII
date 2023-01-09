import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { NotaService } from './nota.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Nota } from './entities/nota.entity';

@Controller('nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Datos correctamente ingresados', type:Nota})
  @ApiResponse({ status: 400, description: 'Error al insertar los datos' })
  create(@Body() createNotaDto: CreateNotaDto) {
    return this.notaService.create(createNotaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  findAll() {
    return this.notaService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.notaService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Datos actualizados correctamente', type:Nota })
  @ApiResponse({ status: 404, description: 'Error al actualizar los datos' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateNotaDto: UpdateNotaDto) {
    return this.notaService.update(id, updateNotaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Datos correctamente eliminados', type:Nota })
  @ApiResponse({ status: 404, description: 'Error al eliminar los datos' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.notaService.remove(id);
  }
}
