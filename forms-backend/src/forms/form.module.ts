import { Module } from '@nestjs/common';
import FormRepositoryMongo from './infrastucture/adapters/form.repository.mongo';
import { FormController } from './infrastucture/controllers/form.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Form, FormSchema } from './infrastucture/adapters/schema/form.schema';
import { CreateFormService } from './applications/use-cases/create-form/create-form.use-case';
import { GetAllFormService } from './applications/use-cases/get-all-form/get-all-form.use-case';
import { GetFormByIdService } from './applications/use-cases/get-form-by-id/get-form-by-id.use-case';
import { AnswerModule } from 'src/answers/answer.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
    AnswerModule,
  ],
  controllers: [FormController],
  providers: [
    CreateFormService,
    GetAllFormService,
    GetFormByIdService,
    {
      provide: 'FormRepository',
      useClass: FormRepositoryMongo,
    },
  ],
  exports: [
    CreateFormService,
    GetAllFormService,
    GetFormByIdService,
  ]
})
export class FormModule {}