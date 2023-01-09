import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, ObjectId } from "mongoose";


@Schema()
export class Prestamista extends Document{


    _id: ObjectId

    @ApiProperty()
    @Prop()
    Nombre: string


    @ApiProperty()
    @Prop({
        type: String,
        unique: true,
        index: true
    })
    Identificaion: string
}


export const SchemaPrestamista = SchemaFactory.createForClass( Prestamista )