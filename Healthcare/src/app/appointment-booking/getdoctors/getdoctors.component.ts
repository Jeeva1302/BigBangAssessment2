import { Component } from '@angular/core';
import { Idoctors } from 'src/app/Models/Doctors';
import { doctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-getdoctors',
  templateUrl: './getdoctors.component.html',
  styleUrls: ['./getdoctors.component.css']
})
export class GetdoctorsComponent {
    constructor(private getdr:doctorService){}

    doctorId?: number;
    doctorName!: string;
    gender!: string;
    specialisedIn!: string;
    address!: string;
    mobileNumber!: number;
    emailId!: string;
    consultingFees!: number;
    workingHours!: string;

    item:Idoctors={
      doctorName: '',
      gender: '',
      specialisedIn: '',
      address: '',
      mobileNumber: 0,
      emailId: '',
      consultingFees: 0,
      workingHours: ''
    }


    doctors: Idoctors[] = [];

    ngOnInit() {
      this.loaddoctors();
    }
  
    loaddoctors() {
      this.getdr.getdoctor().subscribe(
        (data) => {
          this.doctors = data;
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
  }


}
