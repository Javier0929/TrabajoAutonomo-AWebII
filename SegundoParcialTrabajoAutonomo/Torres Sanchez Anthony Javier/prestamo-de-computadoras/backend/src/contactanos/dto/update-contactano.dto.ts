import { PartialType } from '@nestjs/swagger';
import { CreateContactanoDto } from './create-contactano.dto';

export class UpdateContactanoDto extends PartialType(CreateContactanoDto) {}
