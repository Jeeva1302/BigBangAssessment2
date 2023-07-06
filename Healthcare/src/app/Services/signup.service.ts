import { Injectable } from '@angular/core';
import { Isignup } from '../Models/signup';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  url: string="https://localhost:7183/api/Users"
  public postuser(item:Isignup):Observable<Isignup>{

    return this.http.post<Isignup>('https://localhost:7183/api/Users',item);
  }

}
