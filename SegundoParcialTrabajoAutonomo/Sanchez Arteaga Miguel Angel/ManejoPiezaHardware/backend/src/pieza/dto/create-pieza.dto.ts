import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreatePiezaDto {


    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @ApiProperty({
        description:'Descripcion de la Pieza',
        required: true,
        minLength:7
    })
    Descripcion_De_Pieza:string


    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @ApiProperty({
        description:'Caracteristicas de la pieza',
        required: true,
        minLength:7
    })
    Caracteristica:string

    
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @ApiProperty({
        description:'Identificacion de la pieza',
        required: true,
        minLength:7,
        uniqueItems: true
    })
    Identificaion_Pieza: string
}
