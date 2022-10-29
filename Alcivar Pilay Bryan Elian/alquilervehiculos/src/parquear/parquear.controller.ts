import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParquearService } from './parquear.service';
import { CreateParquearDto } from './dto/create-parquear.dto';
import { UpdateParquearDto } from './dto/update-parquear.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Controlador Parquear')
@Controller('parquear')
export class ParquearController {
  constructor(private readonly parquearService: ParquearService) { }

  @Post()
  @ApiResponse({
    status: 201,
    description: "Creacias de Parquear",
  })
  @ApiResponse({
    status: 500,
    description: "Error interno del servidor",
  })
  create(@Body() createParquearDto: CreateParquearDto) {
    return this.parquearService.create(createParquearDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: "Busqueda general de todos los datos de Parquear"
  })
  findAll() {
    return this.parquearService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: "Busqueda por id del parqueo"
  })
  @ApiResponse({
    status: 404,
    description: "El parqueo que intenta buscar no existe"
  })
  findOne(@Param('id') id: string) {
    return this.parquearService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: "Actualizacion con existo del parqueo"
  })
  @ApiResponse({
    status: 404,
    description: "El parqueo que intenta actualizar no existe"
  })
  update(@Param('id') id: string, @Body() updateParquearDto: UpdateParquearDto) {
    return this.parquearService.update(id, updateParquearDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: "Eliminacion completa por id del parqueo"
  })
  @ApiResponse({
    status: 404,
    description: "El parqueo que intenta eliminar no existe"
  })
  remove(@Param('id') id: string) {
    return this.parquearService.remove(id);
  }
}
