import { IsString } from "class-validator";

export class CreateContactanoDto {
    @IsString()
    nombre: string;


    @IsString()
    correoelectronico: string;

  
    @IsString()
    mensaje: string;
}
