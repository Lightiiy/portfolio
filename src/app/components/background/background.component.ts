import { Component } from '@angular/core';

@Component({
  selector: 'port-background',
  standalone: false,
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent {
  bubbleAmount() {
    const amount = Math.floor(window.innerWidth / 40);

    return Array.from({ length: amount });
  }
}
