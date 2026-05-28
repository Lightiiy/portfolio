import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
	declarations: [HomePageComponent, AboutComponent, WorkExperienceComponent],
	imports: [CommonModule, SharedModule, RouterOutlet],
	exports: [HomePageComponent, AboutComponent],
})
export class PagesModule {}
