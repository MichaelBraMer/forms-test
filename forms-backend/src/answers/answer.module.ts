import { Module } from '@nestjs/common';
import AnswerRepositoryMongo from './infrastucture/adapters/answer.repository.mongo';
import { AnswerController } from './infrastucture/controllers/answer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Answer, AnswerSchema } from './infrastucture/adapters/schema/answer.schema';
import { CreateAnswerService } from './applications/use-cases/create-answer/create-answer.use-case';
import { GetAnswersByIdService } from './applications/use-cases/get-answers-by-form/get-answes-by-form.use-case';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),
  ],
  controllers: [AnswerController],
  providers: [
    CreateAnswerService,
    GetAnswersByIdService,
    {
      provide: 'AnswerRepository',
      useClass: AnswerRepositoryMongo,
    },
  ],
  exports: [
    CreateAnswerService,
    GetAnswersByIdService,
    'AnswerRepository',
  ]
})
export class AnswerModule {}