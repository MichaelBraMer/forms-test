import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AnswerArray, AnswerArraySchema } from './answersArray.schema';

export type AnswerDocument = Answer & Document;

@Schema()
export class Answer extends Document {
  @Prop({ required: true })
  formId: string;

  @Prop({ type: [AnswerArraySchema], required: true })
  answers: AnswerArray[];
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);