import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  deviconArr:Array<string,string> = [
  		"devicons-java",
  		"devicons-jenkins",
        "devicons-git",
        "devicons-html5", 
        "devicons-css3",
        "devicons-javascript",
        "devicons-angular",
        "devicons-jquery",
        "devicons-bootstrap",
        "devicons-nodejs",
        "devicons-jira",
        "devicons-mongodb"
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
