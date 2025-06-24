import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
projects= [
    {
      title: "Power BI Sales Dashboard – Blinkit",
      description: "Created an easy-to-use Power BI dashboard for Blinkit, an online retail company, to monitor sales, product performance, and store insights. The dashboard showed important numbers like total sales, product ratings, and how different stores were doing based on size, location, and product type. I added filters so users could view the data they needed, and used DAX formulas to calculate things like average sales and customer feedback. This helped business teams spot top-selling products, understand trends like fat content, and improve how stores perform in different areas..",
      tech: ["Power BI", "DAX"]
    },
    {
      title: "Road Accident Analysis – Excel",
      description: "Created a Road Accident Dashboard in Excel, incorporating data analysis and visualization techniques to track accident trends and patterns. Developed interactive charts and PivotTables to summarize key metrics such as accident frequency, severity, and location. Utilized data cleaning and organization methods to ensure accurate reporting and insights.",
      tech: ["Excel", "Pivot Table","Dashboarding", "Graphs","Charts"]
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
