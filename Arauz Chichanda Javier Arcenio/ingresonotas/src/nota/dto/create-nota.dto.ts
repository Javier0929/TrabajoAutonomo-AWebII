import { ApiProperty } from "@nestjs/swagger"
import { IsDecimal, IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator"


export class CreateNotaDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    parcial: string

    @ApiProperty()
    @IsDecimal()
    @IsNotEmpty()
    @Min(1)
    @IsPositive()
    nota: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    observacion: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    estado: string
}
