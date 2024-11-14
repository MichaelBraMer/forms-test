export interface Answer {
  _id: string,
  formId: string,
  answers: FieldAnswers[],
}

export interface FieldAnswers {
  fieldName: string,
  content: string,
  label: string,
}

export interface DataColumnsNames {
  fieldName: string,
  label: string
}

export interface CreateAnswer {
  formId: string,
  answers: FieldAnswers[],
}
