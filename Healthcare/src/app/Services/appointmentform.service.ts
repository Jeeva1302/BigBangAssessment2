import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iappointment } from '../Models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentformService {

  constructor(private http:HttpClient) { }
  url: string="https://localhost:7183/api/AppointmentDetails"
  postappointment(appointment:Iappointment):Observable<Iappointment>{

    return this.http.post<Iappointment>('https://localhost:7183/api/AppointmentDetails',appointment);
  }
  getappointment():Observable<Iappointment[]>
  {
    return this.http.get<Iappointment[]>(this.url);
  }
}
