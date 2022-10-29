import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Controlador Vehiculo')
@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: "Creacion de vehiculo correctamente",
  })
  @ApiResponse({
    status: 400,
    description: "Error ha ingresado datos duplicados",
  })
  create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculoService.create(createVehiculoDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: "Busqueda general de todos los datos de vehiculo"
  })
  findAll() {
    return this.vehiculoService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: "Busqueda por id del vehiculo"
  })
  @ApiResponse({
    status: 201,
    description: "Busqueda por placa del vehiculo"
  })
  @ApiResponse({
    status: 404,
    description: "El vehiculo que intenta buscar no existe"
  })
  findOne(@Param('id') id: string) {
    return this.vehiculoService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: "Actualizacion con existo del vehiculo"
  })
  @ApiResponse({
    status: 404,
    description: "El vehiculo que intenta actualizar no existe"
  })
  update(@Param('id') id: string, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return this.vehiculoService.update(id, updateVehiculoDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: "Eliminacion completa por id del vehiculo"
  })
  @ApiResponse({
    status: 404,
    description: "El vehiculo que intenta eliminar no existe"
  })
  remove(@Param('id') id: string) {
    return this.vehiculoService.remove(id);
  }
}
