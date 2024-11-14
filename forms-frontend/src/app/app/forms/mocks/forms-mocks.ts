import { Field, Form } from "../interfaces/form.interface";

export const fields: Field[] = [{
  name: 'name',
  label: 'Name',
  type: 'text',
  required: true,
  defaultValue: 'John Doe'
},
{
  name: 'gender',
  label: 'Gender',
  type: 'select',
  required: true,
  values: ['Male', 'Female', 'Other'],
  defaultValue: 'Other'
}];

export const mockForms: Form[] = [
  { _id: '1', name: 'Form 1', description: 'Description 1', fields },
  { _id: '2', name: 'Form 2', description: 'Description 2', fields }
];
