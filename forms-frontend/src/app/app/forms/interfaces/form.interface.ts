import { Answer } from "../../answers/interfaces/answers.interface";

export interface Form {
  _id: string;
  name: string;
  description: string;
  fields: Field[];
}

export interface FormAnswers {
  form: Form;
  answers: Answer[]
}

export interface Field {
  name: string;
  label: string;
  type: 'text' | 'email' | 'date' | 'textarea' | 'select';
  required: boolean;
  values?: string[];
  defaultValue?: string;
}

export interface FieldsForm {
  name: string;
  label: string;
  type: 'text' | 'email' | 'date' | 'textarea' | 'select';
  required: boolean;
  values?: string[];
  defaultValue?: string;
  response: string;
}

export interface addForm {
  name: string;
  description: string;
  fields: Field[];
}
