import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Field, FieldsForm, Form } from '../../interfaces/form.interface';
import { CreateAnswer, FieldAnswers } from '../../../answers/interfaces/answers.interface';
import { AnswersService } from '../../../answers/services/answers.service';
import { emailVerificator } from '../../../answers/functions/emailVerificator';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnChanges {

  formName = ''
  description = ''
  fields: Field[] = []

  fieldsForm: FieldsForm[] = []

  @Input()
  public form?: Form;

  @Output() refreshAnswerList = new EventEmitter<void>();

  constructor(private answersService: AnswersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'] && this.form) {
      this.formName = this.form.name;
      this.description = this.form.description;
      this.fieldsForm = this.form.fields.map((currentField)=> {return {...currentField, response: currentField.defaultValue || ''}})
    }
  }

  refreshAnswers(): void {
    this.refreshAnswerList.emit();
  }

  onSubmit(popover: NgbPopover): void {
    let isValid = true;
    for (const fa of this.fieldsForm){
      if(fa.type==='email' && !emailVerificator(fa.response)){
        console.log('error')
        isValid = false;
        popover.open();
        break;
      }
    }
    if(isValid){
      const fieldAnswers: FieldAnswers[]= this.fieldsForm.map((fieldForm)=>{
        return {
          fieldName: fieldForm.name,
          content: fieldForm.response,
          label: fieldForm.label,
        }
      })
      const createAnswer: CreateAnswer = {
        answers: fieldAnswers,
        formId: this.form!._id
      }
      this.answersService.createAnswer(createAnswer).subscribe((data) => {
        console.log(data)
        this.refreshAnswers()
      })
    }
  }
}
