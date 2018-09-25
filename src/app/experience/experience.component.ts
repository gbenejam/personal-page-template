import { Component, OnInit } from '@angular/core';

export interface ExperienceData {
  title:string;
  company:string;
  city:string;
  duties:string;
  startDate:string;
  endDate:string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  
  public experienceArr:ExperienceData[] = [
        {
            title: "AEM Consultant",
            company: "Blue Infinity",
            city: "Geneva",
            duties: "Providing Web solutions using AEM with Java and Javascript. Resolving client issues. Testing products and applications. Documenting processes and application instructions. Supporting and troubleshooting software issues. Conducting training sessions and workshops. Generating innovate ideas",
            startDate: "March 2013",
            endDate: "Present"
        },
        {
            title: "Junior Web Developer",
            company: "Netcentric",
            city: "Barcelona",
            duties: "Agile Environment. Providing Web solutions using AEM with Java and Javascript. Testing products and applications. Documenting processes and application instructions.",
            startDate: "December 2011",
            endDate: "March 2013"
        }
    ];

  ngOnInit() {
  }

}
