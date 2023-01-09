import { IsString } from "class-validator";

export class CreateFormDto {

    @IsString()
    correo: string;


    @IsString()
    numerodetelefono: string;

  
    @IsString()
    sugerencia: string;

}
