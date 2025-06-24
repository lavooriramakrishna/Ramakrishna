import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
education= [
    {
      degree: "B.Tech",
      institution: "NIT Calicut",
      year: "2018 – 2022",
      score: "CGPA: 6.8"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      year: "2016 – 2018",
      score: "983/1000"
    },
    {
      degree: "10th Grade",
      institution: "Jawahar Navodaya Vidyalaya",
      year: "2016",
      score: "CGPA: 9.0"
    }
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
