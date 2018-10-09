import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';



const routes: Routes = [
	{ path: '', redirectTo: '/about', pathMatch: 'full'},
	{ path: 'about', component: AboutComponent},
	{ path: 'education', component: EducationComponent},
	{ path: 'experience', component: ExperienceComponent},
	{ path: 'interests', component: InterestsComponent},
	{ path: 'projects', component: ProjectsComponent},
	{ path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }