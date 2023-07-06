import { Component, Input } from '@angular/core';
import { Idoctors } from 'src/app/Models/Doctors';
import { doctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent {
  @Input() data?: any;

  constructor(private upd:doctorService){}
  
  doctorName!: string;
  gender!: string;
  specialisedIn!: string;
  address!: string;
  mobileNumber!: number;
  emailId!: string;
  consultingFees!: number;
  workingHours!: string;

  item:Idoctors={
    doctorId:0,
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
    this.upd.updatedoctor(this.data,this.item).subscribe(data=>console.log(data));
    if(confirm("Your details updated successfully")){
      window.location.reload()
    }
  }

}
