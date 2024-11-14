import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AnswersListComponent } from './components/answers-list/answers-list.component';



@NgModule({
  declarations: [AnswersListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    AnswersListComponent
  ]
})
export class AnswersModule { }
