
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';


export class CreateParquearDto {



    @ApiProperty({
        description: 'Fecha de entrada al parqueo '
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    FechaEntrada: string


    
    @ApiProperty({
        description: 'hora de entrada al parqueo '
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    HoraEntrada: string


    
    @ApiProperty({
        description: 'Fecha de salida al parqueo '
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    FechaSalida: string


    
    @ApiProperty({
        description: 'hora de salida al parqueo '
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    HoraSalida: string

}
