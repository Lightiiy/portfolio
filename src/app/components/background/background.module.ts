import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BackgroundComponent],
  imports: [CommonModule, SharedModule],
  exports: [BackgroundComponent],
})
export class BackgroundModule {}
