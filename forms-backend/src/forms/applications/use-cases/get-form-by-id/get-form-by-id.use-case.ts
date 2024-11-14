import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { FormRepository } from '../../../domain/ports/form.repository';
import { AnswerRepository } from 'src/answers/domain/ports/answer.repository';
import { GetFormDto } from '../../dtos/form.response';

@Injectable()
export class GetFormByIdService {
  constructor(
    @Inject('FormRepository') private readonly formRepository : FormRepository,
    @Inject('AnswerRepository') private readonly answerRepository: AnswerRepository,
  ) {}

  public async handler(id: string): Promise<GetFormDto> {
    const form = await this.formRepository.getById(id);
    if (!form) {
      throw new NotFoundException('Formulario no encontrado');
    }
  
    try {
      const answers = await this.answerRepository.getByFormId(id);
      const formAnswer: GetFormDto = {
        form,
        answers,
      } 
      return formAnswer
    } catch (error) {
      console.log(error)
      const formAnswer: GetFormDto = {
        form,
        answers: [],
      }
      return formAnswer;
    }
  }
}