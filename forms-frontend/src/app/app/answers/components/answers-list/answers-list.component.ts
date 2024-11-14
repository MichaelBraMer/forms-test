import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Answer, DataColumnsNames } from '../../interfaces/answers.interface';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrl: './answers-list.component.css'
})

export class AnswersListComponent implements OnChanges{
  isLoading = true;
  dataColumnsName: DataColumnsNames[] = [];
  answersContent: string[] = [];


  @Input()
  public answers!: Answer[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['answers'] && this.answers.length > 0) {
      const firstAnswer = this.answers[0].answers;
      this.dataColumnsName = firstAnswer.map((value) => ({
        fieldName: value.fieldName,
        label: value.label,
      }));
      console.log(this.answers);
      this.isLoading = false;
    }
  }
}
