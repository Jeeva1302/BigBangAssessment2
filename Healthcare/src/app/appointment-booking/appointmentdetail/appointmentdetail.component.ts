import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Iappointment } from 'src/app/Models/appointment';
import { AppointmentformService } from 'src/app/Services/appointmentform.service';

@Component({
  selector: 'app-appointmentdetail',
  templateUrl: './appointmentdetail.component.html',
  styleUrls: ['./appointmentdetail.component.css']
})
export class AppointmentdetailComponent {
  
  constructor(private aptservice:AppointmentformService){}
  
  patientId!: number;
  problem!: string;
  dateToVisit!: string;
  timeslot!: string;
  specialisationLookingFor!: string;
  doctorId?: number;

  DDoctors:any
  appointment:Iappointment={
    
    patientId:0,
    problem: '',
    dateToVisit: '',
    timeslot:'',
    specialisationLookingFor: '',
    doctorId: 0,
    patientName:'',
    age:0,
    address:'',
    mobileNumber:0,
    gender:''
  }

  // submitForm() {
  //   // You can implement the form submission logic here
  //    this.aptservice.postappointment(this.appointment).subscribe(data=>console.log(data));
  //    if(confirm("Your Appointment Booked successfully")){
  //     window.location.reload()
  //    }
  // }
  formSubmitted = false;
  submitForm(myForm: NgForm) {
    if (myForm.valid) {
      // The form is valid, perform form submission logic
      this.aptservice.postappointment(this.appointment).subscribe(data => {
        console.log(data);
        if (confirm('Your Appointment Booked successfully')) {
          window.location.reload();
        }
      });
    } else {
      // The form is invalid, handle the invalid form state
      this.formSubmitted = true;
    }
  }

  

 
}

