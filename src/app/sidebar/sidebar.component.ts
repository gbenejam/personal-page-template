import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    public isCollapsed = false;

    public navigation:Array<string> = [
        "About",
        "Experience",
        "Education",
        "Projects",
        "Skills",
        "Interests"
    ];

    constructor() {
    }

    ngOnInit() {
    }

    makeLowerCase(value:string):string {
        return value.toLocaleLowerCase();
    }

}
