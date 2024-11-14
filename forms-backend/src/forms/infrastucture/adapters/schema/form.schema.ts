import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, FieldSchema } from './field.schema';

export type FormDocument = Form & Document;

@Schema()
export class Form extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [FieldSchema], required: true })
  fields: Field[];
}

export const FormSchema = SchemaFactory.createForClass(Form);