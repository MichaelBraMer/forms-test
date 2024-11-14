import { Injectable, Inject } from '@nestjs/common';
import { Form } from '../../../infrastucture/adapters/schema/form.schema';
import { CreateFormDto } from '../../dtos/form.response';
import { FormRepository } from '../../../domain/ports/form.repository';

@Injectable()
export class CreateFormService {
  constructor(
    @Inject('FormRepository') private readonly formRepository : FormRepository,
  ) {}

  public async handler(formData: CreateFormDto): Promise<Form> {
    return await this.formRepository.create(formData);
  }
}