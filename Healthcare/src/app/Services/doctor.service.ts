import { Injectable } from '@angular/core';
import { Idoctors } from '../Models/Doctors';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Ipatient } from '../Models/patient';

@Injectable({
  providedIn: 'root'
})
export class doctorService {

  constructor(private http:HttpClient) { }
  url: string="https://localhost:7183/api/DoctorsDetails"
  
  
  adddoctor(item:Idoctors):Observable<Idoctors>{

    return this.http.post<Idoctors>('https://localhost:7183/api/DoctorsDetails',item);
  }

  getdoctor():Observable<Idoctors[]>
  {
    return this.http.get<Idoctors[]>(this.url);
  }

  updatedoctor(id:number,item:Idoctors):Observable<Idoctors>
  {
    return this.http.put<Idoctors>(this.url+"/"+id,item);
  }
  
  deletedoctor(id:number):Observable<Idoctors>
  {
    return this.http.delete<Idoctors>(this.url+"/"+id);
  }
  getdoctorbyid(id:number):Observable<Idoctors>
  {
    return this.http.get<Idoctors>(this.url+"/"+id);
  }

}
