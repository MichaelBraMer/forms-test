import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer, CreateAnswer } from '../interfaces/answers.interface';

const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private apiUrl = 'http://localhost:3000/answer'

  constructor(private httpClient: HttpClient) { }

  createAnswer(answer: CreateAnswer): Observable<Answer> {
    return this.httpClient.post<Answer>(this.apiUrl, JSON.stringify(answer), {headers})
  }
}
