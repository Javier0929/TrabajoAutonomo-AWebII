import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { SucribirseService } from './sucribirse.service';
import { CreateSucribirseDto } from './dto/create-sucribirse.dto';
import { UpdateSucribirseDto } from './dto/update-sucribirse.dto';

@Controller('sucribirse')
export class SucribirseController {
  constructor(private readonly sucribirseService: SucribirseService) {}

  @Post('/creacion')
  create(@Body() createSucribirseDto: CreateSucribirseDto) {
    return this.sucribirseService.create(createSucribirseDto);
  }

  @Get()
  @Render('sucribirse/index.hbs')
  findAll() {
    return this.sucribirseService.findAll();
  }

  
}
