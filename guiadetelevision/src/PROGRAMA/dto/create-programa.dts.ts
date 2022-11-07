import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator"


export class CreateProgramaDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    programatv: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    categoria: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    tipo: string
}
