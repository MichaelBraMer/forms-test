import { IsString, IsArray, ValidateNested, IsOptional, IsEnum, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAnswerDto } from 'src/answers/applications/dtos/answer.response';
import { Field } from 'src/forms/infrastucture/adapters/schema/field.schema';

export enum FieldType {
  TEXT = 'text',
  EMAIL = 'email',
  DATE = 'date',
  TEXTAREA = 'textarea',
  SELECT = 'select',
}


class FieldDto {
  @ApiProperty({
    example: 'first_name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Primer nombre',
  })
  @IsString()
  label: string;

  @ApiProperty({
    example: FieldType.TEXT,
    enum: FieldType,
  })
  @IsEnum(FieldType)
  type: FieldType;

  @ApiProperty({
    example: ['Sí', 'No'],
    required: false,
  })
  @ValidateIf((o) => o.type === FieldType.SELECT)
  @IsOptional()
  @IsArray()
  values?: string[];

  @ApiProperty({
    example: 'No',
    required: false,
  })
  @IsOptional()
  @IsString()
  defaultValue?: string;
}

export class CreateFormDto {
  @ApiProperty({example: 'Formulario de ejemplo'})
  @IsString()
  name: string;

  @ApiProperty({example: '"Detalle de casos'})
  @IsString()
  description: string;

  @ApiProperty({
    type: [FieldDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Field)
  fields: Field[];
}

export class GetFormDto {
  @ApiProperty({example: 'Formulario de ejemplo'})
  @IsString()
  form: CreateFormDto;

  @ApiProperty({
    type: [CreateAnswerDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  answers: CreateAnswerDto[];
}
