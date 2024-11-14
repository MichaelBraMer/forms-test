import { Injectable } from '@nestjs/common';
import { Form, FormDocument } from './schema/form.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateFormDto } from '../../applications/dtos/form.response';
import { FormRepository } from '../../domain/ports/form.repository';

@Injectable()
export default class FormRepositoryMongo implements FormRepository {
  constructor(
    @InjectModel(Form.name) private readonly formModel : Model<FormDocument>,
  ) {}

  async getAll(): Promise<Form[]> {
    return await this.formModel.find().exec();
  }

  async create(formData: CreateFormDto): Promise<Form> {
    const form = await this.formModel.create(formData)
    const formCreated = await form.save()
    return formCreated;
  }

  async getById(id: string): Promise<Form> {
    return await this.formModel.findById(id).exec();
  }
}