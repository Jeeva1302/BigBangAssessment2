import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminpartComponent } from './adminpart/adminpart.component';

import { DoctordetailsComponent } from './adminpart/doctordetails/doctordetails.component';
import { GetappointmentdetailComponent } from './adminpart/getappointmentdetail/getappointmentdetail.component';
import { GetdoctorsComponent } from './appointment-booking/getdoctors/getdoctors.component';
import { DoctorpartComponent } from './doctorpart/doctorpart.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  // {path:'signup/signin',component:SigninComponent},
  // {path:'signin/signup',component:SignupComponent},
  // {path:'signin/signup/signin',component:SigninComponent},
  // {path:'signup/signin/signup',component:SignupComponent},
  { path: 'Footer', component: FooterComponent },
  { path: 'user', component: AppointmentBookingComponent,canActivate:[AuthGuard], data:{roles: ['user']}},
  { path: 'feedback', component: FeedbackComponent,canActivate:[AuthGuard], data:{roles: ['user']}},
  // {path:'admin',component:AdminpartComponent},
  // {path:'adminhome', component:AdminhomeComponent},
  {path:'admin', component:DoctordetailsComponent, canActivate:[AuthGuard], data:{roles: ['Admin']}},
  {path:'getaptdetail', component:GetappointmentdetailComponent, canActivate:[AuthGuard], data:{roles: ['Admin']}},
  {path:'doctorpart', component:DoctorpartComponent, canActivate:[AuthGuard], data:{roles: ['doctor']}},
  {path:'admin',component:AdminpartComponent, canActivate:[AuthGuard], data:{roles: ['Admin']}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
