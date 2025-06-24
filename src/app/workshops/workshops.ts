import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workshops',
  imports: [CommonModule],
  templateUrl: './workshops.html',
  styleUrl: './workshops.css'
})
export class Workshops {

workshops= [
      "Data Analytics Internship – IIT Hyderabad",
      "2-Day Data Science Bootcamp – IIT Hyderabad"
    ]


isPopupVisible = false;

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
