import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Component code
  // ...

  ngOnInit() 
  {
    let counter = 1;
    setInterval(() => {
      const radioElement = document.getElementById('radio' + counter) as HTMLInputElement;
      if (radioElement) {
        radioElement.checked = true;
        counter++;
        if (counter > 4) {
          counter = 1;
        }
      }
    }, 4000);
  }

  // Other component code
  // ...
}