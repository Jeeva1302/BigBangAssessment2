import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDoctorService } from '../Services/user-doctor.service';
import { UserDTOModel } from '../Models/userDTO.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

 

  user:UserDTOModel;
  toggle:boolean;

  constructor(private userInterService:UserDoctorService,
              private router:Router)
  {
    this.user=new UserDTOModel();
    
    this.toggle=false;
  }

  addUser()
  {
    this.userInterService.userlogin(this.user).subscribe(data=>
    {
      this.user=data as UserDTOModel;//copy the returned user from the api if the user is present and id and password is match

      //Setting the object properties into the localStorage for the further operation
      localStorage.setItem("token",this.user.token);
      localStorage.setItem("this.internID",(this.user.userName).toString());
      localStorage.setItem("role",this.user.role);
      console.log(this.user);
      alert("sigin successful");
      

  
      if(this.user.role=="user")
      {
        this.router.navigate(['home']).then(() => {
          // Optional: Scroll to the top of the page
          window.scrollTo(0, 0);
          location.reload();
            });      
          }
      else if(this.user.role=="Admin")
      {
        
        
        this.router.navigate(['admin']).then(() => {
      // Optional: Scroll to the top of the page
      window.scrollTo(0, 0);
      location.reload();
        });
      }
      
      else if(this.user.role=="doctor")
      {
        
        this.router.navigate(['doctorpart']).then(() => {
      // Optional: Scroll to the top of the page
      window.scrollTo(0, 0);
      location.reload();
        });
      }
      else{
        this.toggle=!this.toggle;
      }
    },
    err => {
      console.log(err);
      alert("Invalid username or password"); // Display alert for invalid username or password
    });
    
  }

  register()
  {
    this.router.navigate(['signup']);
  }

}
