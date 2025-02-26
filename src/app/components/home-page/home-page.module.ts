import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/components/shared.module';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [HomePageComponent, BannerComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
