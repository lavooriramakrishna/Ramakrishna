import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experience= [
    {
      role: "Training Coordinator",
      company: "Indus Group Inc",
      location: "Hyderabad",
      date: "Jul 2024 – Present",
      responsibilities: [
        "Trained consultants in key data analytics tools like Python, SQL, Power BI, and Advanced Excel to help them build strong technical skills and become job-ready." ,
"Created professional resumes for candidates applying to Data Analyst roles, showcasing their skills and project experience to improve their chances of getting shortlisted." ,
"Conducted mock interviews and provided feedback, helping candidates improve their confidence, communication, and technical answers before real interviews. ",
"Part of the hiring team for freshers, where I interviewed candidates and helped select those with the right skills and potential for data-related roles."
      ]
    },
    {
      role: "Data Analyst",
      company: "Sunglare Technologies Pvt Ltd",
      location: "Hyderabad",
      date: "Aug 2022 – Jun 2024",
      responsibilities: [
        "Analyzed and processed more than 10 million data points to support in-depth release analysis, enabling accurate assessment of trends, performance metrics, and business impact for each software or product update.",
        "Designed and implemented automated reporting workflows using Python, which significantly minimized manual intervention and improved efficiency by reducing repetitive reporting tasks by approximately 40%.",
        "Developed interactive and insightful Power BI dashboards that consolidated key metrics and KPIs, empowering business stakeholders to make data-driven decisions with greater speed and clarity."
      ]
    }
  ]
  fresher= [
    {
      role:"Jr.DataAnalyst",
      Description: "Accurately enter and update customer, sales, and inventory data in the system. Review and verify information to ensure data accuracy and completeness. Coordinate with internal teams to maintain real-time data consistency. Prepare basic daily reports and follow data security protocols."
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
