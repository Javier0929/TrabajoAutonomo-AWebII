import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('/create')
  @Render('')
  create(@Body() createFormDto: CreateFormDto) {
    return this.formService.create(createFormDto);
  }

  @Get()
  @Render('form/index.hbs')
  findAll() {
    return this.formService.findAll();
  }
}
