import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


@Schema()
export class Manejo {
    
    @Prop()
    @ApiProperty()
    Instruciones: string

    @Prop()
    @ApiProperty()
    Detalles_Tecnicos: string

}


export const ManejoSchema = SchemaFactory.createForClass( Manejo )