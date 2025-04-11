import { Component, computed, inject, input, OnInit } from '@angular/core';
import {
	DialogueDicitonaryKeys,
	getDialogueForKey,
} from '../../../../assets/character.vocabulary';
import { DialogueManagerService } from '../../services/dialogue-manager.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
	selector: 'port-dialogue-display',
	standalone: false,
	templateUrl: './dialogue-display.component.html',
	styleUrl: './dialogue-display.component.scss',
})
export class DialogueDisplayComponent implements OnInit {
	dialogueManagerService = inject(DialogueManagerService);

	dialogueDicitonaryKey$ = input.required<DialogueDicitonaryKeys>({
		alias: 'dialgoueDictionaryKey',
	});

	maxLines$$ = toSignal(this.dialogueManagerService.displayedText$$);

	dialogueArray$ = computed(() => {
		return getDialogueForKey(this.dialogueDicitonaryKey$()).slice(
			0,
			this.maxLines$$()
		);
	});
	ngOnInit(): void {
		this.dialogueManagerService.setMaxDialogueOnScreen(
			getDialogueForKey(this.dialogueDicitonaryKey$()).length
		);
	}
}
