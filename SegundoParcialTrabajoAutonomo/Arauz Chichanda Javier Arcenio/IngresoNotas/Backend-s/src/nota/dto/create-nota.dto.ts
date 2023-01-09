import { ApiProperty } from "@nestjs/swagger"
import { IsDecimal, IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator"


export class CreateNotaDto {

    @ApiProperty()
    @IsString()
    parcial: string

    @ApiProperty()
    @IsNotEmpty()
    nota: string

    @ApiProperty()
    @IsString()
    observacion: string

    @ApiProperty()
    @IsString() 
    estado: string
}
