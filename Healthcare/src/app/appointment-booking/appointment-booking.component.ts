import { Component } from '@angular/core';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent {

condition:boolean=false;

SHOW(){
  if(!this.condition)
  {
    this.condition=true;
  }
  else{
    this.condition=false;
  }
}

}
