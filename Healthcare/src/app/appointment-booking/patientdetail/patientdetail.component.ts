import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipatient } from 'src/app/Models/patient';
import { PatientformService } from 'src/app/Services/patientform.service';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.css']
})
export class PatientdetailComponent {


  constructor(private patservice: PatientformService) { }
  patientName!: string;
  age!: number | null;
  gender!: string;
  address!: string;
  mobileNumber!: number;
  typeOfPatient!: string;

  item: Ipatient = {
    patientName: '',
    age: 0,
    gender: '',
    address: '',
    mobileNumber: 0,
    typeOfPatient: ''
  }

  formSubmitted = false;

  submitForm(myForm: NgForm) {
    if (myForm.valid) {
      return this.patservice.postpatient(this.item).subscribe(data => {
        console.log(data);
        alert("Patient Registered Successfully");
      });
    } else {
      this.formSubmitted = true;
      return;
    }
  }

  patient: Ipatient[] | undefined;

  getPatientByName(): void {
    console.log("getpatient called!!!!")

    this.patservice.getPatientByName(this.item.patientName).subscribe(data => this.patient = data);

  }
}
