import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspacioParqueoService } from './espacio-parqueo.service';
import { CreateEspacioParqueoDto } from './dto/create-espacio-parqueo.dto';
import { UpdateEspacioParqueoDto } from './dto/update-espacio-parqueo.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Controlador Espacio parqueadero')
@Controller('espacio-parqueo')
export class EspacioParqueoController {
  constructor(private readonly espacioParqueoService: EspacioParqueoService) { }

  @Post()
  @ApiResponse({
    status: 201,
    description: "Crea espacio parqueadero"
  })
  @ApiResponse({
    status: 500,
    description: "Error internal server"
  })
  create(@Body() createEspacioParqueoDto: CreateEspacioParqueoDto) {
    return this.espacioParqueoService.create(createEspacioParqueoDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: "Busqueda espacio parqueo"
  })
  findAll() {
    return this.espacioParqueoService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: "Busqueda por id del espacio parqueo"
  })
  @ApiResponse({
    status: 404,
    description: "Busqueda no encontrada por id del espacio parqueo"
  })
  findOne(@Param('id') id: string) {
    return this.espacioParqueoService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: "Actualizacion por id del espacio parqueo correcto"
  })
  @ApiResponse({
    status: 400,
    description: "No se encontro el espacio parqueadero a actulizar"
  })
  update(@Param('id') id: string, @Body() updateEspacioParqueoDto: UpdateEspacioParqueoDto) {
    return this.espacioParqueoService.update(id, updateEspacioParqueoDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: "Se ha eliminado el espacio parqueo correctamente"
  })
  @ApiResponse({
    status: 404,
    description: "No existe el espacio parqueo"
  })
  remove(@Param('id') id: string) {
    return this.espacioParqueoService.remove(id);
  }
}
