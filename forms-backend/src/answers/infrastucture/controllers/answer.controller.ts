import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
    Res,
    Get,
    Param,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger'; 
  import { CreateAnswerDto } from '../../applications/dtos/answer.response';
  import { CreateAnswerService } from '../../applications/use-cases/create-answer/create-answer.use-case';
import { GetAnswersByIdService } from 'src/answers/applications/use-cases/get-answers-by-form/get-answes-by-form.use-case';

  @Controller('answer')
  @ApiTags('Answer')

  export class AnswerController {
    constructor(
      private readonly createAnswerService: CreateAnswerService,
      private readonly findByFormIdService: GetAnswersByIdService,
    ) {}

    @Post()
    async create(@Res() request, @Body() createAnswerDto: CreateAnswerDto) {
      try {
        const answer = await this.createAnswerService.handler(createAnswerDto);
        return request.status(HttpStatus.OK).json(answer);
      } catch (error) {
        throw new HttpException('Error creating Answer ' + error, HttpStatus.BAD_REQUEST);
      }
    }

    @Get(':id')
    async findByFormId(@Res() request, @Param('id') id: string) {
      const form = await this.findByFormIdService.handler(id);
      return request.status(HttpStatus.OK).json(form);
    }
}