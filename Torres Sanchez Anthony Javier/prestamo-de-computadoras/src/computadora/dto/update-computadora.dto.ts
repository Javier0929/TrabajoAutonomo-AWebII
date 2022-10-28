import { PartialType } from '@nestjs/swagger';
import { CreateComputadoraDto } from './create-computadora.dto';

export class UpdateComputadoraDto extends PartialType(CreateComputadoraDto) {}
