import { EventEmitter, inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable()
export class DialogueManagerService {
	private router = inject(Router);

	private maxDialogueOnScreen = 5;

	nextLineEvent$$ = new EventEmitter<unknown>();

	displayedText$$ = new BehaviorSubject<number>(1);

	isMoreText$$ = this.displayedText$$.pipe(
		map((currentLines) => currentLines < this.maxDialogueOnScreen)
	);

	constructor() {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => {
				this.resetDisplayedText();
			});

		this.nextLineEvent$$.subscribe(() => {
			this.increaseDisplayedText();
		});
	}

	resetDisplayedText() {
		this.displayedText$$.next(1);
	}

	increaseDisplayedText() {
		this.displayedText$$.next(
			this.displayedText$$.getValue() + 1 <= this.maxDialogueOnScreen
				? this.displayedText$$.getValue() + 1
				: this.maxDialogueOnScreen
		);
	}

	setMaxDialogueOnScreen(arraySize: number) {
		this.maxDialogueOnScreen = arraySize;
	}
}
