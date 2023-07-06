import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoctorAppointmentBooking';
  role: string = localStorage.getItem('role') || '';

  constructor(private router: Router){}
  logOutPage() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.router.navigate(['signin']).then(() => {
      // Optional: Scroll to the top of the page
      window.scrollTo(0, 0);
      location.reload();

    });
  }
  

  loginpage() {
    location.reload();
  }
}
