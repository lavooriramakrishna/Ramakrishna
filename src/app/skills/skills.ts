import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
skill= [
    {
    languages: ["Python", "Java", "SQL"],
    tools: ["Pandas", "NumPy", "Matplotlib", "DAX", "Power Query"],
    bi: ["Power BI", "Excel (PivotTables, Dashboards, Macros)", "Matplotlib"],
    databases: ["MySQL", "SQL"]
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
