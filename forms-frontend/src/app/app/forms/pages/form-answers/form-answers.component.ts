import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from '../../services/forms.service';
import { Form } from '../../interfaces/form.interface';
import { Answer } from '../../../answers/interfaces/answers.interface';

@Component({
  selector: 'app-form-answers',
  templateUrl: './form-answers.component.html',
  styleUrl: './form-answers.component.css',
})
export class FormAnswersComponent implements OnInit {

  id!: string;
  public form?: Form;
  public answers: Answer[] = [];

  constructor(private route: ActivatedRoute, private formsService: FormsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });
    this.loadForm();
  }

  onRefreshAnswerList(): void {
    this.loadForm()
  }

  loadForm(): void {
    this.formsService.getFormById(this.id).subscribe((data) => {
      this.form = data.form;
      this.answers = data.answers;
    })
  }
}
