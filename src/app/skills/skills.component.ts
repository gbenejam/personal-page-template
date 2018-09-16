import { Component, OnInit } from '@angular/core';

export interface Skills {
  icon:string;
  name:string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  devicons:Skills[] = [
    {
      icon: "devicons-java",
      name: "Java"
    },
    {
      icon: "devicons-jenkins",
      name: "Jenkins"
    },
    {
      icon: "devicons-git",
      name: "Git"
    },
    {
      icon: "devicons-html5", 
      name: "HTML 5"
    },
    {
      icon: "devicons-css3",
      name: "CSS 3"
    },
    {
      icon: "devicons-javascript",
      name: "Javascript"
    },
    {
      icon: "devicons-angular",
      name: "Angular"
    },
    {
      icon: "devicons-jquery",
      name: "JQuery"
    },
    {
      icon: "devicons-bootstrap",
      name: "Bootstrap"
    },
    {
      icon: "devicons-nodejs",
      name: "NodeJS"
    },
    {
      icon: "devicons-jira",
      name: "Jira"
    }
  ];

    skillArr:Array<string> = [
        "Specialised in Adobe Experience Manager",
        "Unit Testing",
        "Agile Development & Scrum",
        "Client oriented",
    ];

  ngOnInit() {
  }

}
