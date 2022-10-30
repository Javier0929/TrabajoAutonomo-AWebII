import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreateAlumnoDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    nombre: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @Min(5)
    @IsPositive()
    identificacion: number

}
