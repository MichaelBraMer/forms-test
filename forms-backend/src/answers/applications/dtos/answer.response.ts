import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class AnswerArrayDto {
  @ApiProperty({
    example: 'first_name',
  })
  @IsString()
  fieldName: string;

  @ApiProperty({
    example: 'Primer nombre',
  })
  @IsString()
  content: string;

  @ApiProperty({
    example: 'Primer nombre',
  })
  @IsString()
  label: string;
}

export class CreateAnswerDto {
  @ApiProperty({example: 'Formulario de ejemplo'})
  @IsString()
  formId: string;

  @ApiProperty({
    type: [AnswerArrayDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerArrayDto)
  answers: AnswerArrayDto[];
}