import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Datos correctamente ingresados', type:Alumno})
  @ApiResponse({ status: 400, description: 'Error al insertar los datos' })
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnoService.create(createAlumnoDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  findAll() {
    return this.alumnoService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Datos obtenidos correctamente' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.alumnoService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Datos actualizados correctamente', type:Alumno })
  @ApiResponse({ status: 404, description: 'Error al actualizar los datos' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnoService.update(id, updateAlumnoDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Datos correctamente eliminados', type:Alumno })
  @ApiResponse({ status: 404, description: 'Error al eliminar los datos' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.alumnoService.remove(id);
  }
}
