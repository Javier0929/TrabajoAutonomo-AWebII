import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramaDto } from './create-programa.dts';

export class UpdateProgramaDto extends PartialType(CreateProgramaDto) {}
