import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateManejoDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty({
        description:'Instruciones del manejo de la pieza',
        required: true,
        minLength:5
    })
    Instruciones: string



    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty({
        description:'Detalles Tecnicos del manejo de la pieza',
        required: true,
        minLength:5
    })
    Detalles_Tecnicos:string

    
}
