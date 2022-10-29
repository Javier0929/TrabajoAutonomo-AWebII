import { PartialType } from '@nestjs/swagger';
import { CreateParquearDto } from './create-parquear.dto';

export class UpdateParquearDto extends PartialType(CreateParquearDto) {}
