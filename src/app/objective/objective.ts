import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-objective',
  imports: [CommonModule],
  templateUrl: './objective.html',
  styleUrl: './objective.css'
})
export class Objective {

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


