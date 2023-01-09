import { Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";


@Schema()
export class CreatePrestamoDto {

    @ApiProperty({
        description:"Fecha cuando se realizo el prestamo"
    })
    @IsString()
    Fecha: string


    @ApiProperty({
        description:"Hora cuando se realizo el prestamo"
    })
    @IsString()
    Hora: string


    @ApiProperty({
        description:"Numero de horas que duro el Prestamo"
    })
    @IsString()
    Numero_horas_de_Prestamo:string
}
