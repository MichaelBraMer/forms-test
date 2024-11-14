import { Injectable, Inject } from '@nestjs/common';
import { Form } from '../../../infrastucture/adapters/schema/form.schema';
import { FormRepository } from '../../../domain/ports/form.repository';

@Injectable()
export class GetAllFormService {
  constructor(
    @Inject('FormRepository') private readonly formRepository : FormRepository,
  ) {}

  public handler(): Promise<Form[]> {
    return this.formRepository.getAll();
  }
}