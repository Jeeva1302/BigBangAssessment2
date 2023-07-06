import { Component } from '@angular/core';
import { DoctorModel } from '../Models/doctor.model';
import { UserDTOModel } from '../Models/userDTO.model';
import { UserDoctorService } from '../Services/user-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  doctor: DoctorModel;
  userdto: UserDTOModel;
  response: DoctorModel;
  result: any;


  constructor(private drService: UserDoctorService,//Injections
    private router: Router
  ) {
    this.doctor = new DoctorModel();
    this.userdto = new UserDTOModel();
    this.response = new DoctorModel();
  }



  addDoctor() {
    console.log(this.doctor.role)
    if (this.doctor.role === "doctor") {
      this.drService.doctorRegister(this.doctor).subscribe(
        (data) => {
          // Success response
          this.response = data;
          this.response = data;
          if (data && data.name !== "") {
            this.result = "Please wait in the signin ,Admin will approve you shortly,Thank you!!!!";
            alert('Request sent');
          } else {
            this.result = "Username already Exists, Please use different Username";
            alert('There was an error while sending request');
          }
        },
        (error) => {
          // Error response
          console.log(error);
        }
      );
    }
    if (this.doctor.role === "user") {
      this.drService.userRegister(this.doctor).subscribe(data => {
        this.userdto = data as UserDTOModel;
        localStorage.setItem("token", this.userdto.token);
        localStorage.setItem("this.internID", (this.userdto.userName).toString());




        if (this.userdto.role == "user") {
          this.router.navigate(['signin']);
        }



        else if (this.userdto.role == "Admin")//If user is Admin navigate to intern restricted page
        {
          this.router.navigate(['signin']);
        }

        console.log(this.userdto);
        alert("Registeration Successful")
      },

        err => {
          console.log(err)
          if (err) {
            this.result = "Username already Exists, Please use different Username";
            alert("There was an error while register as user");

          }



        });

    }



  }
  signin() {
    this.router.navigate(['signin']);
  }


}