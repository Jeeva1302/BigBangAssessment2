import { Component } from '@angular/core';
import { UserDTOModel } from '../Models/userDTO.model';
import { DoctorModel } from '../Models/doctor.model';
import { UserDoctorService } from '../Services/user-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorrequest',
  templateUrl: './doctorrequest.component.html',
  styleUrls: ['./doctorrequest.component.css']
})
export class DoctorrequestComponent {

  doctors:DoctorModel;
  userdto:UserDTOModel;
  public doctor:any;
  public newdoctor:any;
  public deletedoctor:any;
  public remove:any;


  constructor(private userInternService:UserDoctorService,//Injections
              private router:Router
              )
  {
    this.doctors = new DoctorModel();
    this.userdto=new UserDTOModel();
  }

  sendRequest()
  {
    this.userInternService.getDoctors().subscribe(data=>
      {
        this.doctor=data;

        // this.userInternService.userRegister(this.intern).subscribe(data=>//Entered details inserted into database
        // {
        //   this.userdto = data as UserDTOModel;//copying the returned data into userdto object
        //   localStorage.setItem("token",this.userdto.token);//set token into localStorage
        //   localStorage.setItem("this.internID",(this.userdto.userName).toString());//set ID into localStorage
  
  
          
          
   
          // if(this.userdto.role=="staff")//If user is intern navigate to intern restricted page
          // {
          //   this.router.navigate(['logIN']);
          // }
          
          console.log(this.userdto);
        // },
      
        // err=>{
        //   console.log(err)
        // });
      });
  }

  addRow(obj:any)
  {
    this.newdoctor=obj;
    this.userInternService.userRegister(this.newdoctor).subscribe(data=>
    {
      this.userdto = data as UserDTOModel;//copying the returned data into userdto object
      localStorage.setItem("token",this.userdto.token);//set token into localStorage
      localStorage.setItem("this.internID",(this.userdto.userName).toString());//set ID into localStorage
      alert('The Doctor has been Approved Successfully');
      this.sendRequest();
    });

  }
  deleteRow(obj:any)
  {
    this.deletedoctor=obj;
    this.userInternService.deleteDoctorInList(this.deletedoctor).subscribe(data=>
      {
              this.remove=data;
              this.sendRequest();

      });
  }
}
