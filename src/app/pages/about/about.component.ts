import { Component } from '@angular/core';
import {
  DialogueDicitonaryKeys,
  getDialogueForKey,
} from '../../../assets/character.vocabulary';

@Component({
  selector: 'port-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private static DICTIONARY_DIALOGUE_KEY: DialogueDicitonaryKeys = 'AboutPage';

  getDialogueKey() {
    return AboutComponent.DICTIONARY_DIALOGUE_KEY;
  }
}
