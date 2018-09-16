import { Component, OnInit } from '@angular/core';

export interface EducationData {
	school:string;
	degree:string;
	department:string; 
	startDate:string;
	endDate:string;
	icon:string;
	status:string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

	public educationArr:EducationData[] = [
	    {
	        school: "Universitat Oberta de Catalunya",
	        degree: "Bachelor of Science",
	        department: "Software Engineering",
	        startDate: "September 2016",
	        endDate: "Present",
	        icon: "fa-code",
	        status: "In Progress"
	    },
	    {
	        school: "Universitat de Barcelona",
	        degree: "Bachelor of Science",
	        department: "Physics",
	        startDate: "September 2012",
	        endDate: "June 2015",
	        icon: "fa-atom",
	        status: "Unfinished"
	    },
	];

  constructor() { }

  ngOnInit() {
  }

}
