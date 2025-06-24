import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css'
})
export class Achievements {
achievements= [
      "5 Star Rated in Python & SQL – HackerRank",
      "Former College Cricket Captain – Led team to victory"
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
