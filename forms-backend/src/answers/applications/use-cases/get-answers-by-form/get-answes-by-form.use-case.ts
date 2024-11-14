import { Injectable, Inject } from '@nestjs/common';
import { Answer } from '../../../infrastucture/adapters/schema/answer.schema';
import { AnswerRepository } from '../../../domain/ports/answer.repository';

@Injectable()
export class GetAnswersByIdService {
  constructor(
    @Inject('AnswerRepository') private readonly answerRepository : AnswerRepository,
  ) {}

  public async handler(formId: string): Promise<Answer[]> {
    return await this.answerRepository.getByFormId(formId);
  }
}