export type DialogueDicitonaryKeys = 'HomePage' | 'AboutPage';

export const mainDialogueDictionary: Record<DialogueDicitonaryKeys, string[]> =
  {
    HomePage: [
      'WelcomeMessage',
      'Message1',
      'Message2',
      'Message3',
      'Message4',
      'Message5',
    ],
    AboutPage: [
      'WelcomeMessage',
      'Message1',
      'Message2',
      'Message3',
      'Message4',
    ],
  };

export function getDialogueForKey(key: DialogueDicitonaryKeys) {
  return mainDialogueDictionary[key].map((value) => `${key}.${value}`);
}
