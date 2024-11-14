import { CreateAnswerDto } from '../../applications/dtos/answer.response';
import { Answer } from '../../infrastucture/adapters/schema/answer.schema';

export interface AnswerRepository {
  create(answer: CreateAnswerDto): Promise<Answer>;
  getByFormId(formId: string): Promise<Answer[]>;
}