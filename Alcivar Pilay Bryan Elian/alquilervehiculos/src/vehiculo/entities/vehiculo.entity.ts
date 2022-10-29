import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Vehiculo {

    @ApiProperty()
    @Prop({
        type:String,
        unique:true,
        index:true
    })
    Placa: string

    
    @ApiProperty()
    @Prop()
    Descripcion: string

  
    @ApiProperty()
    @Prop()
    Color: string
}

export const VehiculoSchema = SchemaFactory.createForClass(Vehiculo);
