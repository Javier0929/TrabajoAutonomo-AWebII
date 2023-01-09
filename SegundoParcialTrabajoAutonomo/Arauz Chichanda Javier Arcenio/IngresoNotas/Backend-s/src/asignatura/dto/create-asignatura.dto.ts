import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator"


export class CreateAsignaturaDto {

    @ApiProperty()
    @IsString()
    descripcion: string

    @ApiProperty()
    @IsString()
    nivel: string

    @ApiProperty()
    @IsNotEmpty()
    numerodecreditos: number
}
