import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, AboutComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent, AboutComponent],
})
export class PagesModule {}
