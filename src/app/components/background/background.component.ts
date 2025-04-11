import { Component, inject, OnInit } from '@angular/core';
import { ScreenWidthService } from '../../shared/services/screen-width.service';

@Component({
  selector: 'port-background',
  standalone: false,
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent implements OnInit {
  private screenWidthService = inject(ScreenWidthService);

  ngOnInit(): void {
    this.screenWidthService.currentScreenWidth();
  }
}
// bubbleAmount() {
//   const amount = Math.floor(window.innerWidth / 40);
//   return Array.from({ length: amount });
// }
