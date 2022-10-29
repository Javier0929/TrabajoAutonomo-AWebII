
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateVehiculoDto {


    @ApiProperty({
        description: 'Placa del vehiculo',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    Placa: string



    @ApiProperty({
        description: 'Descripcion del vechiculo',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    Descripcion: string



    @ApiProperty({
        description: 'color del equipo',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    Color: string

}
