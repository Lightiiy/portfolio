import { Component, computed, inject, input, OnInit } from '@angular/core';
import { DialogueDicitonaryKeys } from '../../../../assets/character.vocabulary';
import { DialogueManagerService } from '../../services/dialogue-manager.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '../../services/translate.service';

@Component({
	selector: 'port-dialogue-display',
	standalone: false,
	templateUrl: './dialogue-display.component.html',
	styleUrl: './dialogue-display.component.scss',
})
export class DialogueDisplayComponent implements OnInit {
	dialogueManagerService = inject(DialogueManagerService);

	translateService = inject(TranslateService);

	dialogueDicitonaryKey$ = input.required<DialogueDicitonaryKeys>({
		alias: 'dialgoueDictionaryKey',
	});

	maxLines$$ = toSignal(this.dialogueManagerService.displayedText$$);

	dialogueArray$ = computed(() => {
		return Object.keys(
			this.translateService.translate(this.dialogueDicitonaryKey$())
		)
			.map((key) => `${this.dialogueDicitonaryKey$()}.${key}`)
			.slice(0, this.maxLines$$());
	});

	ngOnInit(): void {
		this.dialogueManagerService.setMaxDialogueOnScreen(
			Object.keys(
				this.translateService.translate(this.dialogueDicitonaryKey$())
			).length
		);
	}
}
