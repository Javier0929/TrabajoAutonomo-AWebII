import { PartialType } from '@nestjs/swagger';
import { CreateSucribirseDto } from './create-sucribirse.dto';

export class UpdateSucribirseDto extends PartialType(CreateSucribirseDto) {}
