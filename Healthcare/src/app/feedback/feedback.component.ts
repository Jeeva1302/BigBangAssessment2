import { Component } from '@angular/core';
import { FeedbackService } from '../Services/feedback.service';
import { Ifeedback } from '../Models/feedback';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent 
{
    
  constructor(private feedservice:FeedbackService){}

  bookingSatisfaction!: number;
  checkinSatisfaction!: number;
  appointmentPassed!: string;
  appointmentDuration!: string;
  hospitalHygiene!: number;
  medicalPersonnelKindness!: number;
  doctorCare!: number;
  recommendLikelihood!: number;
  comments!: string;

  item:Ifeedback={
    bookingSatisfaction: 0,
    checkinSatisfaction: 0,
    appointmentPassed: '',
    appointmentDuration: '',
    hospitalHygiene: 0,
    medicalPersonnelKindness: 0,
    doctorCare: 0,
    recommendLikelihood: 0,
    comments: ''
  }

  rate(category: string, rating: number) {
    // Clear existing active classes
    const stars = document.querySelectorAll(`#${category}-stars .star`);
    stars.forEach(star => star.classList.remove('active'));
  
    // Add active class to selected stars
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('active');
    }
  
    // Display the rating
    const ratingText = document.querySelector(`#${category}-rating`);
    if (ratingText !== null) {
      ratingText.textContent = `You rated ${category} ${rating} star(s).`; 
    }
    if (category=="hygiene"){
      this.item.hospitalHygiene=rating;
  }
  else if(category=="kindness"){
    this.item.medicalPersonnelKindness=rating;
  }
   
    // console.log(this.hygieneRating, this.kindnessRating);

    
  }
 

  submitForm() {
    // You can implement the form submission logic here
     this.feedservice.postfeedback(this.item).subscribe(data=>console.log(data));
     if(confirm("Thanks for your Feedback!!!")){
      window.location.reload()
     }
  }
 
}

