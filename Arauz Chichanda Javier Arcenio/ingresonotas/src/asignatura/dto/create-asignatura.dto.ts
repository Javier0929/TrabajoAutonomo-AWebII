import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator"


export class CreateAsignaturaDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    descripcion: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    nivel: string

    @ApiProperty()
    @IsNotEmpty()
    @IsPositive()
    @Min(2)
    numerodecreditos: number
}
