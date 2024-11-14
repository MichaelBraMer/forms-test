import { Routes } from '@angular/router';
import { FormHomeComponent } from './app/forms/pages/form-home/form-home.component';
import { FormAnswersComponent } from './app/forms/pages/form-answers/form-answers.component';

export const routes: Routes = [
  { path: 'forms', component: FormHomeComponent},
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  { path: 'forms/:id', component:  FormAnswersComponent},
];
