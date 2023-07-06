import { Component } from '@angular/core';
import { Idoctors } from 'src/app/Models/Doctors';
import { doctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent {

  constructor(private adddocotrservice:doctorService){}
  
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
    workingHours: '',
   
  }

  submitForm() {
    // You can implement the form submission logic here
     this.adddocotrservice.adddoctor(this.item).subscribe(data=>console.log(data));
     if(confirm("Your Details Registered successfully")){
      window.location.reload()
    }
  }
}
