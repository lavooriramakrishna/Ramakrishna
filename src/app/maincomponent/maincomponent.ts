import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-maincomponent',
  imports: [CommonModule],
  templateUrl: './maincomponent.html',
  styleUrl: './maincomponent.css'
})
export class Maincomponent {
portfolioData = {
  hero: {
    name: "L Ramakrishna",
    title: "Data Analyst & Training Coordinator",
    location: "Hyderabad, India",
    contact: {
      email: "lavooriramakrishna9@gmail.com",
      phone: "+91 8129638677",
      linkedin: "https://linkedin.com/in/ramakrishna-l-5a37aa212",
      
    }
  },
}
}
