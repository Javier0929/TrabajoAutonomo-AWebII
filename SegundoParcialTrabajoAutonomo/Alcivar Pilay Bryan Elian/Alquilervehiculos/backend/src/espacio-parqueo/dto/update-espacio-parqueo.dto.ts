import { PartialType } from '@nestjs/swagger';
import { CreateEspacioParqueoDto } from './create-espacio-parqueo.dto';

export class UpdateEspacioParqueoDto extends PartialType(CreateEspacioParqueoDto) {}
