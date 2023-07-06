import { Component } from '@angular/core';
import { Idoctors } from 'src/app/Models/Doctors';
import { doctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-deletedoctor',
  templateUrl: './deletedoctor.component.html',
  styleUrls: ['./deletedoctor.component.css']
})
export class DeletedoctorComponent {

  constructor(private drs:doctorService){}

  id!:number;
  doctor?:Idoctors;

  deletedoctor()
{
  return this.drs.deletedoctor(this.id).subscribe(data=>this.doctor=data),alert("doctor "+this.doctor?.doctorName+" deleted Successfully!!!");
}

}
