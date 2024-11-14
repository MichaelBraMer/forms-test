import { Injectable, Inject } from '@nestjs/common';
import { Answer } from '../../../infrastucture/adapters/schema/answer.schema';
import { CreateAnswerDto } from '../../dtos/answer.response';
import { AnswerRepository } from '../../../domain/ports/answer.repository';

@Injectable()
export class CreateAnswerService {
  constructor(
    @Inject('AnswerRepository') private readonly answerRepository : AnswerRepository,
  ) {}

  public async handler(answerData: CreateAnswerDto): Promise<Answer> {
    return await this.answerRepository.create(answerData);
  }
}