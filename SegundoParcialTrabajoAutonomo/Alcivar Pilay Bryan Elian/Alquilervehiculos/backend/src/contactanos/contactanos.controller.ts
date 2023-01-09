import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { ContactanosService } from './contactanos.service';
import { CreateContactanoDto } from './dto/create-contactano.dto';
import { UpdateContactanoDto } from './dto/update-contactano.dto';

@Controller('contactanos')
export class ContactanosController {
  constructor(private readonly contactanosService: ContactanosService) {}

  @Post('/create')
  @Render('') 
  create(@Body() createContactanoDto: CreateContactanoDto) {
    return this.contactanosService.create(createContactanoDto);
  }

  @Get()
  @Render('contactanos/index.hbs')
  findAll() {
    return this.contactanosService.findAll();
  }
}
