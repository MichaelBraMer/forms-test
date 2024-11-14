import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addForm, Form, FormAnswers } from '../interfaces/form.interface';

const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private apiUrl = 'http://localhost:3000/form'

  constructor(private httpClient: HttpClient) { }

  getForms(): Observable<Form []> {
    const response = this.httpClient.get<Form []>(this.apiUrl, {headers})
    console.log(response)
    return response
  }

  getFormById(id: string): Observable<FormAnswers> {
    return this.httpClient.get<FormAnswers>(`${this.apiUrl}/${id}`, {headers});
  }

  addForm(form: addForm): Observable<Form> {
    return this.httpClient.post<Form>(this.apiUrl, JSON.stringify(form), {headers})
  }
}
