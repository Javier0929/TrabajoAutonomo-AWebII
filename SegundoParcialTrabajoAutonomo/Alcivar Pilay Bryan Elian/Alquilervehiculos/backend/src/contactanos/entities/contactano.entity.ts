import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {  Document } from "mongoose";

@Schema()
export class Contactano extends Document {
    
    @Prop()
    nombre: string;


    @Prop()
    correoelectronico: string;

    @Prop()
    mensaje: string;
}
export const ContactanosSchema = SchemaFactory.createForClass( Contactano )

