import { PartialType } from '@nestjs/swagger';
import { CreateManejoDto } from './create-manejo.dto';

export class UpdateManejoDto extends PartialType(CreateManejoDto) {}
