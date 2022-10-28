import { Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";


@Schema()
export class CreatePrestamoDto {

    @ApiProperty({
        description:"Fecha cuando se realizo el prestamo"
    })
    @MinLength(2)
    @IsString()
    @IsNotEmpty()
    Fecha: Date


    @ApiProperty({
        description:"Hora cuando se realizo el prestamo"
    })
    @MinLength(2)
    @IsString()
    @IsNotEmpty()
    Hora: Date


    @ApiProperty({
        description:"Numero de horas que duro el Prestamo"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    Numero_horas_de_Prestamo:string
}
