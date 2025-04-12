import {
	AfterViewInit,
	Directive,
	ElementRef,
	inject,
	Renderer2,
} from '@angular/core';
import { DialogueManagerService } from '../../../shared/services/dialogue-manager.service';
import { TranslateService } from '../../../shared/services/translate.service';

@Directive({
	selector: '[NextButtonDirective]',
	standalone: false,
})
export class NextButtonDirective implements AfterViewInit {
	private static NEXT_LINE_TEXT = 'NextButtonIndicator.Text';

	private dialogueManagerService = inject(DialogueManagerService);

	private renderer = inject(Renderer2);

	private elementRef = inject(ElementRef);

	private translateService = inject(TranslateService);

	private nextLineIndicator!: HTMLElement;

	ngAfterViewInit(): void {
		this.dialogueManagerService.isMoreText$$.subscribe((isMoreText) => {
			if (this.nextLineIndicator) {
				if (isMoreText) {
					this.bringButtonback();
				} else {
					this.removeButtonFromDisplay();
				}
			}
		});

		const translatedKey = this.translateService.translate(
			NextButtonDirective.NEXT_LINE_TEXT
		);

		const indicatorText = this.renderer.createText(translatedKey);
		this.nextLineIndicator = this.renderer.createElement('div');
		this.renderer.appendChild(this.nextLineIndicator, indicatorText);
		this.renderer.addClass(
			this.nextLineIndicator,
			'portfolioDisplayBanner__nextIndicatorButton'
		);
		this.renderer.listen(this.nextLineIndicator, 'click', () =>
			this.dialogueManagerService.nextLineEvent$$.emit()
		);
		this.renderer.appendChild(
			this.elementRef.nativeElement,
			this.nextLineIndicator
		);
	}

	removeButtonFromDisplay() {
		if (this.nextLineIndicator.classList.contains('removed')) {
			return;
		}
		this.renderer.addClass(this.nextLineIndicator, 'removed');
	}

	bringButtonback() {
		if (!this.nextLineIndicator.classList.contains('removed')) {
			return;
		}
		this.renderer.removeClass(this.nextLineIndicator, 'removed');
	}
}
