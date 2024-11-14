import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsListComponent } from './components/forms-list/forms-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AnswersModule } from '../answers/answers.module';
import { FormComponent } from './components/form/form.component';
import { FormAnswersComponent } from './pages/form-answers/form-answers.component';
import { FormHomeComponent } from './pages/form-home/form-home.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule as FormAngularModule} from '@angular/forms';


@NgModule({
  declarations: [
    FormsListComponent,
    FormComponent,
    FormAnswersComponent,
    FormHomeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatLabel,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatIconModule,
    AnswersModule,
    FormAngularModule,
  ],
  exports: [
    FormsListComponent,
    FormComponent,
  ]
})
export class FormsModule { }
