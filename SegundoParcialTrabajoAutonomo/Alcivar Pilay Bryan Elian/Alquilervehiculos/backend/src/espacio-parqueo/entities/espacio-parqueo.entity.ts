
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


@Schema()
export class Espacioparqueo {

    @ApiProperty()
    @Prop()
    Descripcion: string

}

export const ParqueoSchema = SchemaFactory.createForClass(Espacioparqueo);
