import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'port-bubble',
  standalone: false,
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.scss',
})
export class BubbleComponent implements AfterViewInit {
  private floatingSpeed = 2;

  private animationFrameId!: number;

  @ViewChild('bubble', { static: false })
  bubbleElementRef!: ElementRef<HTMLElement>;

  private bubbleElement!: HTMLElement;

  ngAfterViewInit(): void {
    this.bubbleElement = this.bubbleElementRef.nativeElement;
    this.RandomizeBubble();
    this.bubblingAnimation();
    this.resetBubblePosition();
  }

  private bubblingAnimation(): void {
    let currentTop =
      parseFloat(this.bubbleElement.style.top) || window.innerHeight;

    if (
      currentTop <=
      -1 * parseFloat(getComputedStyle(this.bubbleElement).height)
    ) {
      this.bubbleElement.style.top = `${window.innerHeight}px`;
      this.RandomizeBubble();
      this.floatingSpeed = 2;
    } else {
      this.bubbleElement.style.top = `${currentTop - this.floatingSpeed}px`;
      this.floatingSpeed *= 1 + Math.random() / (Math.random() * 100);
    }

    this.animationFrameId = requestAnimationFrame(() =>
      this.bubblingAnimation(),
    );
  }

  private resetBubblePosition() {
    if (this.bubbleElement) {
      this.bubbleElement.style.top = `${window.innerHeight}px`;
    }
  }

  private RandomizeBubble(): void {
    const radiusLength = Math.floor(Math.random() * (250 / 2 + 1) + 50);

    this.bubbleElement.style.width = `${radiusLength}px`;
    this.bubbleElement.style.height = `${radiusLength}px`;

    const maxPositionX = window.innerWidth - radiusLength / 2;
    const randomPositionX = Math.floor(Math.random() * maxPositionX);

    this.bubbleElement.style.left = `${randomPositionX}px`;
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }
}
