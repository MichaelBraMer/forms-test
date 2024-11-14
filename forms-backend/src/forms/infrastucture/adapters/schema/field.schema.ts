import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { FieldType } from 'src/forms/applications/dtos/form.response';

@Schema()
export class Field {
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    label: string;
  
    @Prop({ 
        required: true, 
        enum: FieldType,
    })
    type: string;
  
    @Prop({ default: false })
    required: boolean;
  
    @Prop({ 
        type: [String], 
    })
    values?: string[];
  
    @Prop()
    defaultValue?: string;
}

export const FieldSchema = SchemaFactory.createForClass(Field);