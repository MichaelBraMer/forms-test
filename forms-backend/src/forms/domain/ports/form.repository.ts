import { CreateFormDto } from '../../applications/dtos/form.response';
import { Form } from '../../infrastucture/adapters/schema/form.schema';

export interface FormRepository {
  getAll(): Promise<Form[]>;

  create(form: CreateFormDto): Promise<Form>;

  getById(id: string): Promise<Form>;

}