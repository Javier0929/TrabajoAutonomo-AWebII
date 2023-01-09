import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ComputadoraService } from './computadora.service';
import { CreateComputadoraDto } from './dto/create-computadora.dto';
import { UpdateComputadoraDto } from './dto/update-computadora.dto';
import { Computadora } from './entities/computadora.entity';

@ApiTags('Documentacion de la Entidad Computadora')
@Controller('computadora')
export class ComputadoraController {
  constructor(private readonly computadoraService: ComputadoraService) {}

  @Post()
  @ApiResponse({status: 201, description:'Creacion correcta del Modelo Computadora', type:Computadora })
  @ApiResponse({status: 500, description:'Error interno al intentar crear el Modelo' })
  create(@Body() createComputadoraDto: CreateComputadoraDto) {
    return this.computadoraService.create(createComputadoraDto);
  }

  @Get()
  @ApiResponse({status: 200, description:'Busqueda completa de los Datos en DB' })
  findAll() {
    return this.computadoraService.findAll();
  }

  @Get(':id')
  @ApiResponse({status: 200, description:'Busqueda por id en DB Completada' })
  @ApiResponse({status: 404, description:'Busqueda por id no encontrada en DB' })
  findOne(@Param('id') id: string) {
    return this.computadoraService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description:'Actualizacion de Un modelo computadora Exitosa' , type: Computadora})
  @ApiResponse({status: 404, description:'Modelo a actualizar no encontrado' })
  update(@Param('id') id: string, @Body() updateComputadoraDto: UpdateComputadoraDto) {
    return this.computadoraService.update(id, updateComputadoraDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description:'Eliminacion de nn modelo computadora Exitosa' })
  @ApiResponse({status: 404, description:'Modelo a eliminar no encontrado' })
  remove(@Param('id') id: string) {
    return this.computadoraService.remove(id);
  }
}
