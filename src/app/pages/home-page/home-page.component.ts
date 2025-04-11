import { Component, OnInit } from '@angular/core';
import {
  DialogueDicitonaryKeys,
  getDialogueForKey,
  mainDialogueDictionary,
} from '../../../assets/character.vocabulary';

@Component({
  selector: 'port-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private static DICTIONARY_DIALOGUE_KEY: DialogueDicitonaryKeys = 'HomePage';

  getDialogueKey() {
    return HomePageComponent.DICTIONARY_DIALOGUE_KEY;
  }
}
