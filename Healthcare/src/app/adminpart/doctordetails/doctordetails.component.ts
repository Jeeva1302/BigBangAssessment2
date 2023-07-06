import { Component, OnInit } from '@angular/core';
import { Idoctors } from 'src/app/Models/Doctors';
import { doctorService } from 'src/app/Services/doctor.service';
@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent implements OnInit{

  constructor(private drservice:doctorService) { }
  // doctorName!: string;
  // gender!: string;
  // specialisedIn!: string;
  // address!: string;
  // mobileNumber!: number;
  // emailId!: string;
  // consultingFees!: number;
  // workingHours!: string;
  selectedDoctorId?:number;
  passCourseId(courseId:any)
  {
    this.selectedDoctorId = courseId;
  }
doctorDetails?:Idoctors[]
  ngOnInit(): void
  {

    this.drservice.getdoctor().subscribe(co=>this.doctorDetails=co);
  }

  deletedoctor(id:any, name: string) {
    this.drservice.deletedoctor(id).subscribe(
      () => {
        confirm("Doctor " + name + " deleted Successfully!!!")
        {
          window.location.reload();
        }
      },
      error => {
        console.error(error);
        alert("An error occurred while deleting the course. Please try again.");
      }
    );
  }
}
