import { EventEmitter, inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, filter, map, tap } from 'rxjs';

@Injectable()
export class DialogueManagerService {
	private router = inject(Router);

	private maxDialogueOnScreen$$ = new BehaviorSubject<number>(1);

	nextLineEvent$$ = new EventEmitter<unknown>();

	displayedText$$ = new BehaviorSubject<number>(1);

	isMoreText$$ = combineLatest([
		this.displayedText$$,
		this.maxDialogueOnScreen$$,
	]).pipe(map(([currentLines, maxlines]) => currentLines < maxlines));

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
			this.displayedText$$.getValue() + 1 <=
				this.maxDialogueOnScreen$$.getValue()
				? this.displayedText$$.getValue() + 1
				: this.maxDialogueOnScreen$$.getValue()
		);
	}

	setMaxDialogueOnScreen(arraySize: number) {
		this.maxDialogueOnScreen$$.next(arraySize);
	}
}
