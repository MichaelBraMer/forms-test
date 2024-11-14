import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class AnswerArray {
    @Prop({ required: true })
    fieldName: string;

    @Prop({ required: true })
    label: string;

    @Prop({ required: true })
    content: string;
}

export const AnswerArraySchema = SchemaFactory.createForClass(AnswerArray);