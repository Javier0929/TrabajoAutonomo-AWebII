
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';



export class CreateEspacioParqueoDto {

    @ApiProperty({
        description: 'Descripcion del espacio parqueadero'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    Descripcion: string



}
