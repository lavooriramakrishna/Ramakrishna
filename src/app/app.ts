import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./about/about";
import { Objective } from "./objective/objective";
import { Skills } from "./skills/skills";
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";
import { Certifications } from "./certifications/certifications";
import { Achievements } from "./achievements/achievements";
import { Education } from "./education/education";
import { Maincomponent } from "./maincomponent/maincomponent";

import { CommonModule } from '@angular/common';
import { Workshops } from "./workshops/workshops";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Objective, Skills, Experience, Projects, Certifications, CommonModule, Achievements, Education, Maincomponent, Workshops],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'luke2';
  
}
