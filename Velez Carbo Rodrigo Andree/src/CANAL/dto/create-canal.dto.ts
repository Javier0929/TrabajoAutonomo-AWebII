import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreateCanalDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    nombreCanal: string


}
