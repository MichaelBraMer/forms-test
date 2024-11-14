import { Injectable } from '@nestjs/common';
import { Answer, AnswerDocument } from './schema/answer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateAnswerDto } from '../../applications/dtos/answer.response';
import { AnswerRepository } from '../../domain/ports/answer.repository';

@Injectable()
export default class AnswerRepositoryMongo implements AnswerRepository {
  constructor(
    @InjectModel(Answer.name) private readonly answerModel : Model<AnswerDocument>,
  ) {}

  async getByFormId(formId: string): Promise<Answer[]> {
    return await this.answerModel.find({formId}).exec();
  }

  async create(answerData: CreateAnswerDto): Promise<Answer> {
    const answer = await this.answerModel.create(answerData)
    const answerCreated = await answer.save()
    return answerCreated;
  }

}