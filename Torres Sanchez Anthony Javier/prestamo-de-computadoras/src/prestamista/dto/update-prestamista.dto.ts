import { PartialType } from '@nestjs/swagger';
import { CreatePrestamistaDto } from './create-prestamista.dto';

export class UpdatePrestamistaDto extends PartialType(CreatePrestamistaDto) {}
