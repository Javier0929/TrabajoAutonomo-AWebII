import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ProgramaService } from './programa.service';
import { CreateProgramaDto } from './dto/create-programa.dts';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';

@Controller('programa')
export class ProgramaController {
  constructor(private readonly programaService: ProgramaService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Datos correctamente ingresados', type:Programa})
  @ApiResponse({ status: 200, description: 'Error al insertar los datos'})
  create(@Body() createProgramaDto: CreateProgramaDto) {
    return this.programaService.create(createProgramaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente', type:Programa})
  findAll() {
    return this.programaService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.programaService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Datos actualizados correctamente', type:Programa })
  @ApiResponse({ status: 404, description: 'Error al actualizar los datos' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateProgramaDto: UpdateProgramaDto) {
    return this.programaService.update(id, updateProgramaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Datos correctamente eliminados', type:Programa})
  @ApiResponse({ status: 404, description: 'Error al eliminar los datos' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.programaService.remove(id);
  }
}
