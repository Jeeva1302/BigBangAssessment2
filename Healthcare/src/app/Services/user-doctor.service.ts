import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTOModel } from '../Models/userDTO.model';
import { DoctorModel } from '../Models/doctor.model';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserDoctorService {

  constructor(private httpClient:HttpClient) {
   }

   userlogin(user:UserDTOModel){
    return this.httpClient.post("https://localhost:7183/api/Users/LogIN/login",user);
   }

   userRegister(doctor:DoctorModel){
    return this.httpClient.post("https://localhost:7183/api/Users/Register",doctor);
   }

   doctorRegister(doctor:DoctorModel):Observable<any>
   {
    return this.httpClient.post("https://localhost:7183/api/Users/doctorRegister/doctor",doctor);

   }
   getDoctors():Observable<any>
   {
    return this.httpClient.get("https://localhost:7183/api/Users/View_All_doctorRequest");

   }

   deleteDoctorInList(doctor:DoctorModel):Observable<any>
   {
    return this.httpClient.post("https://localhost:7183/api/Users/deletedoctorinlist/deleteDoctorinlist",doctor);
   }


}