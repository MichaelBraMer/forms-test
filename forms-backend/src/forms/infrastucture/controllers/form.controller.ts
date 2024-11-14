import {
    Controller,
    Get,
    Post,
    Body,
    HttpException,
    HttpStatus,
    Res,
    Param,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger'; 
  import { CreateFormDto } from '../../applications/dtos/form.response';
  import { CreateFormService } from '../../applications/use-cases/create-form/create-form.use-case';
  import { GetAllFormService } from '../../applications/use-cases/get-all-form/get-all-form.use-case';
  import { GetFormByIdService } from 'src/forms/applications/use-cases/get-form-by-id/get-form-by-id.use-case';

  @Controller('form')
  @ApiTags('Form')

  export class FormController {
    constructor(
      private readonly createFormService: CreateFormService,
      private readonly getAllFormService: GetAllFormService,
      private readonly getFormByIdService: GetFormByIdService,
    ) {}

    @Get()
    async findAll(@Res() request) {
      const form = await this.getAllFormService.handler();
      return request.status(HttpStatus.OK).json(form);
    }

    @Post()
    async create(@Res() request, @Body() createFormDto: CreateFormDto) {
      try {
        const form = await this.createFormService.handler(createFormDto);
        return request.status(HttpStatus.OK).json(form);
      } catch (error) {
        console.log(error);
        throw new HttpException('Error creating Form', HttpStatus.BAD_REQUEST);
      }
    }

    @Get(':id')
    async findById(@Res() request, @Param('id') id: string) {
      const form = await this.getFormByIdService.handler(id);
      return request.status(HttpStatus.OK).json(form);
    }
}
  