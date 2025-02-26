import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background.component';
import { BubbleComponent } from './bubble/bubble.component';

@NgModule({
  declarations: [BackgroundComponent, BubbleComponent],
  imports: [CommonModule],
  exports: [BackgroundComponent],
})
export class BackgroundModule {}
