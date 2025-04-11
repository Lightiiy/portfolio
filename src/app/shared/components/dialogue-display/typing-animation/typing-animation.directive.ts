import {
	AfterViewInit,
	Directive,
	ElementRef,
	inject,
	Input,
	Renderer2,
} from '@angular/core';

@Directive({
	selector: '[fullText]',
	standalone: false,
})
export class TypingAnimationDirective implements AfterViewInit {
	@Input()
	fullText: string = 'text';

	private elementRef = inject(ElementRef);

	private renderer = inject(Renderer2);

	ngAfterViewInit(): void {
		this.typingAnimation();
	}

	typingAnimation() {
		this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', '');

		let index = 0;

		const interval = setInterval(() => {
			if (index < this.fullText.length) {
				const currentText = this.elementRef.nativeElement.textContent;
				this.renderer.setProperty(
					this.elementRef.nativeElement,
					'textContent',
					currentText + this.fullText.charAt(index)
				);
				index++;
			} else {
				clearInterval(interval);
			}
		}, 50);
	}
}
