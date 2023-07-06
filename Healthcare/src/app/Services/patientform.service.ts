
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipatient } from '../Models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientformService {

  constructor(private http:HttpClient) { }
  url: string="https://localhost:7183/api/PatientDetails"
  postpatient(item:Ipatient):Observable<Ipatient>{

    return this.http.post<Ipatient>('https://localhost:7183/api/PatientDetails',item);
  }

  getPatientByName(name: string): Observable<Ipatient[]> {
   
    return this.http.get<Ipatient[]>(`https://localhost:7183/api/PatientDetails/${name}`);
  }

}
