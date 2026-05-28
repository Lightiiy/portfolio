import { Component, OnInit } from '@angular/core';
import { DialogueDicitonaryKeys } from '../../../assets/character.vocabulary';

@Component({
	selector: 'port-work-experience',
	standalone: false,
	templateUrl: './work-experience.component.html',
	styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent implements OnInit {
	private static DICTIONARY_DIALOGUE_KEY: DialogueDicitonaryKeys =
		DialogueDicitonaryKeys.WorkExperience;

	getDialogueKey() {
		return WorkExperienceComponent.DICTIONARY_DIALOGUE_KEY;
	}

	ngOnInit(): void {
		console.log('hello!');
	}
}
