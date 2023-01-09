import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {  Document } from "mongoose";

@Schema()
export class Form extends Document {
    @Prop()
    correo: string;


    @Prop()
    numerodetelefono: string;

    @Prop()
    sugerencia: string;

}
export const FormSchema = SchemaFactory.createForClass( Form )

    

