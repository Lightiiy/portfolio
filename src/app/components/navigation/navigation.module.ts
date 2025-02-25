import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from '../../shared/components/shared.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
      NavigationComponent
    ]
  
})
export class NavigationModule { }
