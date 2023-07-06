import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ifeedback } from '../Models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  constructor(private http:HttpClient) { }
  url: string="https://localhost:7183/api/FeedbackDetails"
  postfeedback(item:Ifeedback):Observable<Ifeedback>{

    return this.http.post<Ifeedback>('https://localhost:7183/api/FeedbackDetails',item);
  }


}
